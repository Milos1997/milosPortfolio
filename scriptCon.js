const slider = document.querySelector(".slider");
const contact = document.querySelector("#contact");
const tekst = document.querySelector("#text");

const tl = new TimelineMax();

tl.fromTo(slider, 2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut })
    .fromTo(contact, 2, { x: "100%" }, { x: "0%", ease: Power2.easeInOut }, "-= 2")
    .fromTo(tekst, 2, { x: "100%" }, { x: "0%", ease: Power2.easeInOut }, "-= 2");