var tablinks = document.getElementsByClassName("tab-links");
var tabcontains = document.getElementsByClassName("tab-contains");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-links");
    }
    for(tabcontain of tabcontains){
        tabcontain.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-links")
    document.getElementById(tabname).classList.add("active-tab")
}

// -----------sidemenu-------------
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

// -------------Cursor-----------
// var main = document.querySelector("body")
// var cursor = document.querySelector("#cursor")
// main.addEventListener("mousemove", function(dets) {
//     gsap.to(cursor, {
//         x:dets.x,
//         y:dets.y,     
//     })
// })
// ---------Animation--------
gsap.from(".logo, nav ul li, nav i",{
    y:-40,
    opacity:0,
    duration: 1,
    delay:0.2,
    stagger:0.3,
})
var tl = gsap.timeline()

tl.from(".header-text p",{
    y:-40,
    opacity:0,
    duration:1,
    delay:1
})
tl.from(".header-text h1",{
    x:-200,
    opacity:0,
    duration:1,

})
// tl.from("nav i",{
//     y:200,
//     opacity:0,
//     duration:1,

// })
// tl.from(".about-col-1 #about-img",{
//     x:-200,
//     opacity:0,
//     delay:1,
//     duration:1,
//     scrolleTrigger:{
//         trigger:".about-col-1 #about-img",
//         scroller:"body",
//         marker:true,
//         start:"top 80%",
//         scrub:true
//     }
// })
gsap.from(".about-col-1 #about-img",{
    x:-200,
    opacity:0,
    delay:1,
    duration:1,
    scrolleTrigger:{
        trigger:".about-col-1 #about-img",
        scroller:"body",
        marker:true,
        start:"top 80%",
        scrub:true
    }
})
// -----------------scrollrevel----------------
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
    opacity: 0
})

ScrollReveal().reveal('.about-col-1, .project1, .card1, .contact-left',  { origin: 'left'});
ScrollReveal().reveal('.about-col-2 h1, .sub-title, .project2' ,  { origin: 'top'});
ScrollReveal().reveal('.card3, .project3, .project4, .input, .one, .two, .three', { origin: 'right'});
ScrollReveal().reveal('.card2, .btn, .para, #skills', { origin: 'bottom'});















