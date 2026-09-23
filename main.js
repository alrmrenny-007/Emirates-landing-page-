/* Emirates concept site — shared behavior. Every block below guards for the
   elements it needs, so this one file can be included on every page even
   though not every page has a search widget, destination grid, etc. */
(function () {
  "use strict";

  function $(id) { return document.getElementById(id); }
  function $$(sel, ctx) { return (ctx || document).querySelectorAll(sel); }

  /* ---------- Header scroll state (every page) ---------- */
  var header = $('siteHeader');
  if (header) {
    var hasHero = !!document.querySelector('.hero');
    if (hasHero) {
      function onScroll() {
        if (window.scrollY > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
      }
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
    /* Pages without a dark hero (booking, destination detail) keep the
       light "scrolled" header state permanently — it's set in their markup. */
  }

  /* ---------- Mobile menu (every page) ---------- */
  var menuToggle = $('menuToggle'), mobileMenu = $('mobileMenu'),
      iconMenu = $('iconMenu'), iconClose = $('iconClose');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
      if (iconMenu) iconMenu.style.display = isOpen ? 'none' : 'block';
      if (iconClose) iconClose.style.display = isOpen ? 'block' : 'none';
    });
    $$('a, button', mobileMenu).forEach(function (el) {
      el.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        if (iconMenu) iconMenu.style.display = 'block';
        if (iconClose) iconClose.style.display = 'none';
      });
    });
  }

  /* ---------- Homepage flight search widget ---------- */
  var flightSearch = $('flightSearch');
  if (flightSearch) {
    var tripBtns = $$('.trip-btn');
    var returnField = $('returnField'), returnDate = $('returnDate');
    tripBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        tripBtns.forEach(function (b) { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
        var isOneWay = btn.dataset.trip === 'one';
        if (returnDate) returnDate.disabled = isOneWay;
        if (returnField) returnField.style.opacity = isOneWay ? '.45' : '1';
      });
    });

    var fromInput = $('fromInput'), toInput = $('toInput');
    var swapBtn = $('swapBtn');
    if (swapBtn && fromInput && toInput) {
      swapBtn.addEventListener('click', function () {
        var tmp = fromInput.value;
        fromInput.value = toInput.value;
        toInput.value = tmp;
      });
    }

    var today = new Date().toISOString().split('T')[0];
    var departDate = $('departDate');
    if (departDate) departDate.setAttribute('min', today);
    if (returnDate) returnDate.setAttribute('min', today);

    var paxToggle = $('paxToggle'), paxPanel = $('paxPanel'),
        paxSummary = $('paxSummary'), cabinClass = $('cabinClass');
    var counts = { adults: 1, children: 0 };
    var limits = { adults: [1, 9], children: [0, 8] };

    function updatePaxSummary() {
      if (!paxSummary || !cabinClass) return;
      var total = counts.adults + counts.children;
      var label = total === 1 ? '1 adult' :
        (counts.children ? counts.adults + ' adult' + (counts.adults > 1 ? 's' : '') + ', ' + counts.children + ' child' + (counts.children > 1 ? 'ren' : '') : counts.adults + ' adults');
      paxSummary.textContent = label + ', ' + cabinClass.value;
    }

    if (paxToggle && paxPanel) {
      paxToggle.addEventListener('click', function () {
        var isOpen = paxPanel.hasAttribute('hidden');
        if (isOpen) { paxPanel.removeAttribute('hidden'); paxToggle.setAttribute('aria-expanded', 'true'); }
        else { paxPanel.setAttribute('hidden', ''); paxToggle.setAttribute('aria-expanded', 'false'); }
      });
      var paxDone = $('paxDone');
      if (paxDone) {
        paxDone.addEventListener('click', function () {
          paxPanel.setAttribute('hidden', '');
          paxToggle.setAttribute('aria-expanded', 'false');
          paxToggle.focus();
        });
      }
      document.addEventListener('click', function (e) {
        if (!paxPanel.contains(e.target) && e.target !== paxToggle && !paxToggle.contains(e.target)) {
          paxPanel.setAttribute('hidden', '');
          paxToggle.setAttribute('aria-expanded', 'false');
        }
      });
      $$('.stepper button').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var target = btn.dataset.target;
          var step = parseInt(btn.dataset.step, 10);
          var next = counts[target] + step;
          if (next < limits[target][0] || next > limits[target][1]) return;
          counts[target] = next;
          var countEl = $(target + 'Count');
          if (countEl) countEl.textContent = next;
          updatePaxSummary();
        });
      });
      if (cabinClass) cabinClass.addEventListener('change', updatePaxSummary);
    }

    var searchNote = $('searchNote');
    flightSearch.addEventListener('submit', function (e) {
      e.preventDefault();
      var to = toInput ? toInput.value.trim() : '';
      if (!to) {
        if (searchNote) searchNote.textContent = 'Add a destination to search flights.';
        if (toInput) toInput.focus();
        return;
      }
      var activeTrip = document.querySelector('.trip-btn.active');
      var params = new URLSearchParams({
        from: fromInput ? fromInput.value.trim() : '',
        to: to,
        trip: activeTrip ? activeTrip.dataset.trip : 'round',
        depart: departDate ? departDate.value : '',
        ret: (returnDate && !returnDate.disabled) ? returnDate.value : '',
        adults: counts.adults,
        children: counts.children,
        cabin: cabinClass ? cabinClass.value : 'Economy'
      });
      window.location.href = 'booking.html?' + params.toString();
    });
  }

  /* ---------- Destination filter chips (homepage) ---------- */
  var chipRow = $('chipRow');
  if (chipRow) {
    var destCards = $$('.dest-card');
    chipRow.addEventListener('click', function (e) {
      var chip = e.target.closest('.chip');
      if (!chip) return;
      $$('.chip', chipRow).forEach(function (c) { c.classList.remove('active'); });
      chip.classList.add('active');
      var region = chip.dataset.region;
      destCards.forEach(function (card) {
        var show = region === 'all' || card.dataset.region === region;
        card.classList.toggle('hidden-card', !show);
      });
    });
  }

  /* ---------- Testimonial scroller (homepage) ---------- */
  var scroller = $('testiScroller');
  var testiPrev = $('testiPrev'), testiNext = $('testiNext');
  if (scroller && testiPrev && testiNext) {
    testiPrev.addEventListener('click', function () { scroller.scrollBy({ left: -360, behavior: 'smooth' }); });
    testiNext.addEventListener('click', function () { scroller.scrollBy({ left: 360, behavior: 'smooth' }); });
  }
})();
