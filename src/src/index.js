require('./styles.scss');
var projects = require('./projects');

var IMG = 'src/dist/img/';
var $ = function (s, r) { return (r || document).querySelector(s); };
var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

var root = document.documentElement;
var modal = $('#modal'), slidesEl = $('#m-slides'), dotsEl = $('#m-dots');
var current = 0;

// ---------- Project cards ----------
$('#project-grid').innerHTML = projects.map(function (p) {
  return '<div class="tile is-parent is-4" data-cats="' + p.cats + '">' +
    '<article class="project-card" tabindex="0" role="button" data-project="' + p.id + '">' +
    '<img src="' + IMG + p.cover + '" alt="' + p.title + '">' +
    '<div class="project-card__overlay"><span class="project-card__title">' + p.title +
    '</span><span class="project-card__meta">' + p.meta + '</span></div></article></div>';
}).join('');

// ---------- Tabs ----------
$$('.project-tabs li').forEach(function (tab) {
  tab.addEventListener('click', function (e) {
    e.preventDefault();
    $$('.project-tabs li').forEach(function (t) { t.classList.toggle('is-active', t === tab); });
    $$('#project-grid [data-cats]').forEach(function (tile) {
      var show = tab.dataset.filter === 'all' || tile.dataset.cats.split(' ').indexOf(tab.dataset.filter) > -1;
      tile.classList.toggle('is-hidden', !show);
    });
  });
});

// ---------- Modal ----------
function openProject(id) {
  var p = projects.filter(function (x) { return x.id === id; })[0];
  if (!p) return;
  $('#m-title').textContent = p.title;
  slidesEl.innerHTML = p.slides.map(function (s) {
    if (s.indexOf('yt:') === 0) {
      var v = s.slice(3);
      return '<div class="slide"><button class="yt" data-id="' + v + '" aria-label="Play video" ' +
        'style="background-image:url(https://i.ytimg.com/vi/' + v + '/hqdefault.jpg)"><span></span></button></div>';
    }
    return '<div class="slide"><img src="' + IMG + p.base + s + '" alt="' + p.title + '"></div>';
  }).join('');
  dotsEl.innerHTML = p.slides.map(function () { return '<i></i>'; }).join('');
  $('.slider-nav').classList.toggle('is-hidden', p.slides.length < 2);
  $('#m-body').innerHTML = '<ul>' + p.bullets.map(function (b) { return '<li>' + b + '</li>'; }).join('') +
    '</ul><div class="tags">' + p.tags.map(function (t) { return '<span class="tag">' + t + '</span>'; }).join('') + '</div>';
  slidesEl.scrollLeft = 0;
  current = 0;
  markDot();
  root.classList.add('is-clipped');
  modal.classList.add('is-active');
  $('.modal-card-body', modal).scrollTop = 0;
}

function closeModal() {
  modal.classList.remove('is-active');
  root.classList.remove('is-clipped');
  slidesEl.innerHTML = ''; // also stops any playing video
}

function markDot() {
  $$('i', dotsEl).forEach(function (d, i) { d.classList.toggle('is-on', i === current); });
}

function stopVideos() {
  $$('iframe', slidesEl).forEach(function (f) {
    var b = document.createElement('div');
    b.innerHTML = '<button class="yt" data-id="' + f.dataset.id + '" aria-label="Play video" ' +
      'style="background-image:url(https://i.ytimg.com/vi/' + f.dataset.id + '/hqdefault.jpg)"><span></span></button>';
    f.parentNode.replaceChild(b.firstChild, f);
  });
}

function goTo(i) {
  var n = slidesEl.children.length;
  slidesEl.scrollTo({ left: slidesEl.clientWidth * Math.max(0, Math.min(n - 1, i)), behavior: 'smooth' });
}

slidesEl.addEventListener('scroll', function () {
  var i = Math.round(slidesEl.scrollLeft / slidesEl.clientWidth);
  if (i !== current) { current = i; markDot(); stopVideos(); }
});

// ---------- Delegated clicks ----------
document.addEventListener('click', function (e) {
  var t = e.target;
  var yt = t.closest('.yt');
  if (yt) {
    var f = document.createElement('iframe');
    f.dataset.id = yt.dataset.id;
    f.src = 'https://www.youtube-nocookie.com/embed/' + yt.dataset.id + '?autoplay=1&rel=0';
    f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    f.referrerPolicy = 'strict-origin-when-cross-origin';
    f.allowFullscreen = true;
    yt.parentNode.replaceChild(f, yt);
    return;
  }
  var card = t.closest('[data-project]');
  if (card) return openProject(card.dataset.project);
  if (t.closest('.prev')) return goTo(current - 1);
  if (t.closest('.next')) return goTo(current + 1);
  if (t.closest('.modal .delete, .modal-background, .modal-close-btn')) closeModal();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeModal();
  if (e.key === 'Enter' && e.target.dataset && e.target.dataset.project) openProject(e.target.dataset.project);
  if (modal.classList.contains('is-active')) {
    if (e.key === 'ArrowRight') goTo(current + 1);
    if (e.key === 'ArrowLeft') goTo(current - 1);
  }
});