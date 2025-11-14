let mainHeading = document.querySelector("#main-heading");
let hillRight = document.querySelector("#hill4");
let hillLeft = document.querySelector("#hill3");
let leaf = document.querySelector("#leaf");
let hillback1 = document.querySelector("#hill1");
const navButtons = document.querySelectorAll(".nav-button");
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
    const firstSection = document.querySelector('#section1');
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









