document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  var dropdowns = document.querySelectorAll('.nav-item--dropdown');

  // Mobile menu toggle
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('is-open');
      toggle.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu when a nav link is clicked (mobile)
    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        dropdowns.forEach(function (d) { d.classList.remove('is-open'); });
      });
    });
  }

  // Dropdown toggle (especially useful on mobile / touch)
  dropdowns.forEach(function (item) {
    var label = item.querySelector('.nav-group-label');
    if (!label) return;

    label.addEventListener('click', function (e) {
      // On mobile, toggle open/closed; on desktop hover still works via CSS
      if (window.matchMedia('(max-width: 780px)').matches) {
        e.preventDefault();
        e.stopPropagation();
        var wasOpen = item.classList.contains('is-open');
        dropdowns.forEach(function (d) { d.classList.remove('is-open'); });
        if (!wasOpen) item.classList.add('is-open');
      }
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-item--dropdown')) {
      dropdowns.forEach(function (d) { d.classList.remove('is-open'); });
    }
  });

  // Placeholder form handlers — no backend wired yet
  document.querySelectorAll('form[data-placeholder-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = form.querySelector('.form-success');
      if (note) {
        note.style.display = 'block';
      } else {
        alert('Thank you — this form isn\'t connected to a live service yet, but your message would be sent here.');
      }
      form.reset();
    });
  });
});
