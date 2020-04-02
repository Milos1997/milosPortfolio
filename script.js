const slider = document.querySelector(".slider");
const head = document.querySelector("#head");
const tekst = document.querySelector("#text");

const tl = new TimelineMax();

tl.fromTo(slider, 2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut })
    .fromTo(head, 2, { x: "100%" }, { x: "0%", ease: Power2.easeInOut }, "-= 2")
    .fromTo(tekst, 2, { x: "100%" }, { x: "0%", ease: Power2.easeInOut }, "-= 2");