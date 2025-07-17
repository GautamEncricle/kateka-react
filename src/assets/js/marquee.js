const initMarquee = () => {
  // team marquee
  const rowAnimations = [];
  document
    .querySelectorAll('[data-target="moving-portraits.row-odd"]')
    .forEach((row) => {
      const track = row.querySelector("div.grid");
      const clone = track.cloneNode(true);
      row.appendChild(clone);

      const anim = gsap.to([track, clone], {
        xPercent: -100,
        ease: "linear",
        duration: 40,
        repeat: -1,
      });
      rowAnimations.push(anim);
    });
  document
    .querySelectorAll('[data-target="moving-portraits.row-even"]')
    .forEach((row) => {
      const grids = row.querySelector(".grid");
      const clone = grids.cloneNode(true);
      row.appendChild(clone);

      gsap.set([grids, clone], { xPercent: -100 });
      const anim = gsap.to([grids, clone], {
        xPercent: 0,
        ease: "linear",
        duration: 50,
        repeat: -1,
      });
      rowAnimations.push(anim);
    });

  document
    .querySelectorAll('[data-target="moving-portraits.portrait"]')
    .forEach((portrait) => {
      const infoIcon = portrait.querySelector(".info-icon");
      const infoContent = portrait.querySelector(".info-content");
      const closeBtn = portrait.querySelector(".close");

      infoIcon?.addEventListener("click", () => {
        portrait.classList.add("active");
        infoIcon.style.display = "none";
        infoContent.classList.remove("hidden");
        infoContent.classList.add("flex");
        document
          .querySelectorAll('[data-target="moving-portraits.portrait"]')
          .forEach((el) => {
            if (el !== portrait) {
              el.classList.add("opacity-0", "pointer-events-none");
            }
          });
        rowAnimations.forEach((anim) => anim.pause());
      });

      closeBtn?.addEventListener("click", () => {
        portrait.classList.remove("active");
        infoIcon.style.display = "";
        infoContent.classList.add("hidden");
        infoContent.classList.remove("flex");
        document
          .querySelectorAll('[data-target="moving-portraits.portrait"]')
          .forEach((el) => {
            el.classList.remove("opacity-0", "pointer-events-none");
          });
        rowAnimations.forEach((anim) => anim.resume());
      });
    });
};

export default initMarquee;
