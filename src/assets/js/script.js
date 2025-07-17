import initHeader from "./header.js";
import initCustom from "./custom.js";
import initSlider from "./slider.js";
import initTabs from "./tabs.js";
import initAccordion from "./accordion.js";
import initMarquee from "./marquee.js";
import initFilter from "./filter.js";
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll init
  // eslint-disable-next-line no-undef
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    smoothTouch: false,
  });

  initHeader();
  initCustom();
  initSlider();
  initTabs();
  initAccordion();
  initMarquee();
  initFilter();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // eslint-disable-next-line no-undef
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  // eslint-disable-next-line no-undef
  ScrollTrigger.defaults({ scroller: window });
  // eslint-disable-next-line no-undef
  ScrollTrigger.refresh();

  window.lenis = lenis;
});
