(function() {
  // Hamburger toggle for mobile
  var btn = document.querySelector('.hamburger-btn');
  var sidebar = document.querySelector('.sidebar');
  var overlay = document.querySelector('.mobile-nav-overlay');

  if (btn && sidebar) {
    btn.addEventListener('click', function() {
      sidebar.classList.toggle('open');
      if (overlay) overlay.classList.toggle('open');
    });
  }
  if (overlay) {
    overlay.addEventListener('click', function() {
      sidebar.classList.remove('open');
      overlay.classList.remove('open');
    });
  }

  // Mark active nav links based on current page filename
  var path = window.location.pathname.replace(/\/$/, '') || '/index';
  var filename = path.split('/').pop().replace('.html', '') || 'index';
  var links = document.querySelectorAll('.site-nav a');
  links.forEach(function(link) {
    var href = link.getAttribute('href') || '';
    var linkFile = href.replace('.html', '').replace(/^\//, '');
    if (linkFile === filename || (filename === 'index' && linkFile === '')) {
      link.classList.add('active');
    }
  });
})();
