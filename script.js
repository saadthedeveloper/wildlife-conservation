let mainHeading = document.querySelector("#main-heading");
let hillRight = document.querySelector("#hill4");
let hillLeft = document.querySelector("#hill3");
let leaf = document.querySelector("#leaf");
let hillback1 = document.querySelector("#hill1");
let navHomeButton = document.querySelector("#home-nav-button");
let navAboutButton = document.querySelector("#about-nav-button");
let navLocationButton = document.querySelector("#location-nav-button");
let navContactButton = document.querySelector("#contact-nav-button");



window.addEventListener('scroll', () => {
    let value = window.scrollY;
    mainHeading.style.marginTop = value * 2.5 + 'px';
    hillRight.style.marginRight = value * 0.3 + 'px';
    hillLeft.style.marginLeft = value * 0.3 + 'px';
    leaf.style.marginLeft = value * 1.3 + 'px';
    hillback1.style.marginTop = value * 0.9 + 'px';


});


// Select all your sections
const sections = document.querySelectorAll("section");

// Create observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(`👉 ${entry.target.id} is visible`);

      // Example actions per section
      if (entry.target.id === "section1") {
        document.querySelector("header").style.backgroundColor = "transparent";
        document.querySelector("#position-scroll-div-1").style.backgroundColor = "white";
        document.querySelector("#position-scroll-div-2").style.backgroundColor = "transparent";
        document.querySelector("#position-scroll-div-3").style.backgroundColor = "transparent";
      }
      if (entry.target.id === "section2") {
        document.querySelector("header").style.backgroundColor = "#ffffff41";
        document.querySelector("#position-scroll-div-2").style.backgroundColor = "white";
        document.querySelector("#position-scroll-div-1").style.backgroundColor = "transparent";
        document.querySelector("#position-scroll-div-3").style.backgroundColor = "transparent";
      }
      if (entry.target.id === "section3") {
        document.querySelector("header").style.backgroundColor = "#ffffff41";
        document.querySelector("#position-scroll-div-3").style.backgroundColor = "white";
        document.querySelector("#position-scroll-div-2").style.backgroundColor = "transparent";
        document.querySelector("#position-scroll-div-1").style.backgroundColor = "transparent";
      }
    }
  });
}, { threshold: 0.5 }); 
// threshold 0.6 = fires when 60% of section is visible

// Start observing each section
sections.forEach(section => observer.observe(section));



