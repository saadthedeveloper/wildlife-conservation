let mainHeading = document.querySelector("#main-heading");
let hillRight = document.querySelector(".hero-section-img--hill4");
let hillLeft = document.querySelector(".hero-section-img--hill3");
let leaf = document.querySelector(".hero-section-img--leaf");
let hillback1 = document.querySelector(".hero-section-img--hill1");
const navButtons = document.querySelectorAll(".nav-button");
const cursor = document.querySelector("#cursor");








document.addEventListener("mousemove", e => {
    cursor.style.top = (e.pageY - 8)+"px";
    cursor.style.left = (e.pageX - 8)+"px";
});


//Parallax
const section1 = document.querySelector('#hero-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      window.addEventListener('scroll', scrollHandler);
    } else {
      window.removeEventListener('scroll', scrollHandler);
    }
  });
}, { threshold: 0 });

observer.observe(section1);

function scrollHandler() {
  let scrollY = window.scrollY - section1.offsetTop;
  scrollY = Math.max(0, scrollY);
  document.documentElement.style.setProperty('--scroll', scrollY + 'px');
}




// Function to update active nav link
function updateActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-button a');
    const header = document.querySelector('header');
    
    let currentSection = '';
    
    // Find which section is currently in view
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
            currentSection = section.getAttribute('id');
        }
    });
    
    // Update active class on nav links
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
    
    // Update header background based on first section scroll position
    const firstSection = document.querySelector('#hero-section');
    if (firstSection) {
        const firstSectionHeight = firstSection.offsetHeight;
        const halfwayPoint = firstSectionHeight / 2;
        
        if (window.scrollY > halfwayPoint) {
            header.classList.remove('header-transparent');
            header.classList.add('header-solid');
        } else {
            header.classList.remove('header-solid');
            header.classList.add('header-transparent');
        }
    }
}

// Add scroll event listener
window.addEventListener('scroll', updateActiveNav);

// Also update on page load
document.addEventListener('DOMContentLoaded', updateActiveNav);









