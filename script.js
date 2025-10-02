let mainHeading = document.querySelector("#main-heading");
let hillRight = document.querySelector("#hill4");
let hillLeft = document.querySelector("#hill3");



window.addEventListener('scroll', ()=>{
    let value = window.scrollY;
    mainHeading.style.marginTop = value * 2.5 + 'px'; 
    hillRight.style.marginRight = value * 0.3 + 'px'; 
    hillLeft.style.marginLeft = value * 0.3 + 'px'; 


} );

