let mainHeading = document.querySelector("#main-heading");
let hillRight = document.querySelector("#hill4");
let hillLeft = document.querySelector("#hill3");
let leaf = document.querySelector("#leaf");
let hillback1 = document.querySelector("#hill1");
const navButtons = document.querySelectorAll(".nav-list-item");
const cursor = document.querySelector("#cursor");








document.addEventListener("mousemove", e => {
    cursor.style.top = (e.pageY - 8)+"px";
    cursor.style.left = (e.pageX - 8)+"px";
});



window.addEventListener('scroll', () => {
  let value = window.scrollY;
  mainHeading.style.marginTop = value * 2.0 + 'px';
  hillRight.style.marginRight = value * 0.3 + 'px';
  hillLeft.style.marginLeft = value * 0.3 + 'px';
  leaf.style.marginLeft = value * 1.3 + 'px';
  hillback1.style.marginTop = value * 0.9 + 'px';

});


// Wait for DOM loaded in case script is in head
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const header = document.querySelector('header');

  if (!sections.length) {
    console.warn('No <section> elements found.');
    return;
  }
  if (!header) {
    console.warn('No <header> element found.');
    return;
  }

  // Map section id -> nav button id (edit if your IDs differ)
  const navMap = {
    section1: 'home-nav-button',
    section2: 'about-nav-button',
    section3: 'locations-nav-button',
    section4: 'careers-nav-button',
    section5: 'newsroom-nav-button',
  };

  // Pre-cache nav elements and warn if missing
  const navCache = {};
  Object.entries(navMap).forEach(([sectionId, btnId]) => {
    const el = document.getElementById(btnId);
    if (!el) console.warn(`Nav button not found for "${sectionId}" -> "#${btnId}"`);
    else {
      el.classList.add('nav-btn'); // ensure base class present
      navCache[sectionId] = el;
    }
  });

  // Helper to reset all navs
  const resetNavs = () => {
    Object.values(navCache).forEach(btn => btn.classList.remove('active'));
  };

  // IntersectionObserver: choose the entry with maximum intersectionRatio
  const observer = new IntersectionObserver((entries) => {
    if (!entries || !entries.length) return;

    // pick entry with highest intersectionRatio
    const visible = entries.reduce((best, e) => 
      (!best || e.intersectionRatio > best.intersectionRatio) ? e : best
    , null);

    if (!visible || !visible.isIntersecting) {
      // nothing visible enough (optional: reset)
      // resetNavs();
      return;
    }

    const id = visible.target.id;
    // header background: section1 -> transparent, others -> solid
    if (id === 'section1') {
      header.classList.add('header-transparent');
      header.classList.remove('header-solid');
    } else {
      header.classList.add('header-solid');
      header.classList.remove('header-transparent');
    }

    // highlight the corresponding nav
    resetNavs();
    const activeBtn = navCache[id];
    if (activeBtn) activeBtn.classList.add('active');
    else console.warn(`No cached nav button for visible section id "${id}"`);
  }, { threshold: [0.4] }); // multiple thresholds help accurate ratio

  sections.forEach(s => observer.observe(s));
});









