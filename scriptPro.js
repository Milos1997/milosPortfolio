const slider3 = document.querySelector(".slider3");
const images = document.querySelector(".images");

const tl = new TimelineMax();

tl.fromTo(slider3, 2, { height: "0%" }, { height: "100%", ease: Power2.easeInOut })
    .fromTo(images, 2.5, { y: "-200%" }, { y: "0%", ease: Power2.easeInOut }, "-= 2");