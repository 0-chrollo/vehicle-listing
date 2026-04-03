// Nav Menu Functionality
// Nav Menu Functionality
// Nav Menu Functionality
// Nav Menu Functionality
const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');

burgerBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    
    if (mobileMenu.classList.contains('active')) {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
});

// Close mobile menu when clicking on a link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    });
});

// Navbar scroll effect - ADD THIS
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
















// Reviews Functionality
// Reviews Functionality
// Reviews Functionality
// Reviews Functionality
// Reviews Functionality

const rvTrackEl   = document.getElementById('rvTrack');
const rvDotsEl    = document.getElementById('rvDots');
const rvBtnPrev   = document.getElementById('btnPrev');
const rvBtnNext   = document.getElementById('btnNext');
const rvCardEls   = Array.from(rvTrackEl.querySelectorAll('.rv-card'));

let rvCurrent = 0;
let rvPerView = getPerView();
let rvPages   = Math.ceil(rvCardEls.length / rvPerView);

function getPerView() {
  return window.innerWidth <= 620 ? 1 : 2;
}

function getStepWidth() {
  return rvCardEls[0].getBoundingClientRect().width + 16;
}

function buildDots() {
  rvDotsEl.innerHTML = '';
  for (let i = 0; i < rvPages; i++) {
    const btn = document.createElement('button');
    btn.className = 'rv-dot' + (i === rvCurrent ? ' active' : '');
    btn.setAttribute('aria-label', 'Page ' + (i + 1));
    btn.addEventListener('click', () => goTo(i));
    rvDotsEl.appendChild(btn);
  }
}

function goTo(idx) {
  rvCurrent = Math.max(0, Math.min(idx, rvPages - 1));
  rvTrackEl.style.transform = `translateX(-${rvCurrent * rvPerView * getStepWidth()}px)`;
  rvBtnPrev.disabled = rvCurrent === 0;
  rvBtnNext.disabled = rvCurrent === rvPages - 1;
  rvDotsEl.querySelectorAll('.rv-dot').forEach((d, i) => d.classList.toggle('active', i === rvCurrent));
}

rvBtnPrev.addEventListener('click', () => goTo(rvCurrent - 1));
rvBtnNext.addEventListener('click', () => goTo(rvCurrent + 1));

window.addEventListener('resize', () => {
  rvPerView = getPerView();
  rvPages   = Math.ceil(rvCardEls.length / rvPerView);
  rvCurrent = 0;
  buildDots();
  goTo(0);
});

/* Mouse drag */
let rvIsDragging = false, rvStartX = 0, rvStartOffset = 0;

rvTrackEl.addEventListener('mousedown', e => {
  rvIsDragging  = true;
  rvStartX      = e.clientX;
  rvStartOffset = rvCurrent * rvPerView * getStepWidth();
  rvTrackEl.classList.add('is-dragging');
});
document.addEventListener('mousemove', e => {
  if (!rvIsDragging) return;
  rvTrackEl.style.transform = `translateX(-${rvStartOffset - (e.clientX - rvStartX)}px)`;
});
document.addEventListener('mouseup', e => {
  if (!rvIsDragging) return;
  rvIsDragging = false;
  rvTrackEl.classList.remove('is-dragging');
  const diff = rvStartX - e.clientX;
  if (diff > 60)       goTo(rvCurrent + 1);
  else if (diff < -60) goTo(rvCurrent - 1);
  else                 goTo(rvCurrent);
});

/* Touch swipe */
let rvTouchStartX = 0;
rvTrackEl.addEventListener('touchstart', e => { rvTouchStartX = e.touches[0].clientX; }, { passive: true });
rvTrackEl.addEventListener('touchend', e => {
  const diff = rvTouchStartX - e.changedTouches[0].clientX;
  if (diff > 50)       goTo(rvCurrent + 1);
  else if (diff < -50) goTo(rvCurrent - 1);
});

buildDots();
goTo(0);
// Reviews Functionality
// Reviews Functionality













// New Vehicle arrival Slide Function
// New Vehicle arrival Slide Function
// New Vehicle arrival Slide Function
// New Vehicle arrival Slide Function
// New Vehicle arrival Slide Function
// New Vehicle arrival Slide Function


const track     = document.getElementById('track');
  const thumb     = document.getElementById('thumb');
  const count     = document.getElementById('count');
  const arrowPrev = document.getElementById('arrowPrev');
  const arrowNext = document.getElementById('arrowNext');
  const cards     = track.querySelectorAll('.vehicle-card');
  const total     = cards.length;

  // Scroll exactly one card width + gap per click
  function scrollByCard(direction) {
    const cardWidth = cards[0].offsetWidth + 20;
    track.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
  }

  arrowPrev.addEventListener('click', () => scrollByCard(-1));
  arrowNext.addEventListener('click', () => scrollByCard(1));

  function updateUI() {
    const maxScroll = track.scrollWidth - track.clientWidth;
    const pct = maxScroll > 0 ? track.scrollLeft / maxScroll : 0;
    thumb.style.width = Math.max(20, pct * 100) + '%';

    // Disable arrows at the ends
    arrowPrev.disabled = track.scrollLeft <= 0;
    arrowNext.disabled = track.scrollLeft >= maxScroll - 1;

    // Card counter
    let closest = 0, minDist = Infinity;
    cards.forEach((c, i) => {
      const dist = Math.abs(c.getBoundingClientRect().left - track.getBoundingClientRect().left);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    count.textContent = (closest + 1) + ' / ' + total;
  }

  track.addEventListener('scroll', updateUI);
  updateUI(); // set initial state

// New Vehicle arrival Slide Function
// New Vehicle arrival Slide Function
// New Vehicle arrival Slide Function
// New Vehicle arrival Slide Function
// New Vehicle arrival Slide Function
// New Vehicle arrival Slide Function