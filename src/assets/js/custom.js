const initCustom = () => {
  // Function to fade up images on scroll
  function fadeUpImages() {
    gsap.fromTo(
      ".discover-img",
      { y: 100 }, // Start with opacity 0 and slightly below
      {
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".discover-img-grid",
          start: "40% 80%",
          end: "bottom 50%",
          scrub: true,
        },
      },
    );
  }
  // Call the function
  if (window.matchMedia("(min-width: 1024px)").matches) {
    // Call the function
    fadeUpImages();
    wellnessAnimation();
    imgGrid();
    offerGrid();
  }

  // Wellness Animation
  function wellnessAnimation() {
    gsap.to(".img-left", {
      rotation: 400,
      x: -700,
      scrollTrigger: {
        trigger: ".wellness",
        start: "top 80%",
        duration: 1,
        end: "bottom center",
        scrub: true,
        // marker: true,
      },
    });

    gsap.to(".img-right", {
      rotation: 400,
      x: 700,
      scrollTrigger: {
        trigger: ".wellness",
        start: "top 80%",
        duration: 1,
        end: "bottom center",
        scrub: true,
        // marker: true,
      },
    });
  }

  // Fade in Top Down Animation
  function imgGrid() {
    gsap.from(".img-grid-slider .card", {
      opacity: 0,
      y: -60,
      duration: 0.6,
      stagger: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".img-grid-slider",
        start: "top 300",
        end: "5% top",
        scrub: true,
        // markers: true
      },
    });
  }

  // Offer Grid Image
  // function offerGrid() {
  //   const offerContents = document.querySelectorAll('.offer-grid-content');
  //   const offerImages = document.querySelectorAll('.offer-grid-img img');

  //   offerContents.forEach(content => {
  //     const ogContent = content.querySelector('.og-content');
  //     gsap.set(ogContent, { autoAlpha: 0, height: 0, overflow: 'hidden' });
  //   });

  //   offerContents.forEach((content, index) => {
  //     content.addEventListener('mouseenter', () => {
  //       const ogContent = content.querySelector('.og-content');

  //       ogContent.style.height = "auto";
  //       const autoHeight = ogContent.offsetHeight + "px";
  //       ogContent.style.height = "0px";

  //       gsap.to(ogContent, {
  //         autoAlpha: 1,
  //         height: autoHeight,
  //         duration: 0.5,
  //         ease: "power2.out",
  //         onComplete: () => {
  //           ogContent.style.height = "auto";
  //         }
  //       });

  //       offerImages.forEach((img, imgIndex) => {
  //         gsap.to(img, {
  //           autoAlpha: imgIndex === index ? 1 : 0,
  //           duration: 0.5
  //         });
  //       });
  //     });

  //     content.addEventListener('mouseleave', () => {
  //       const ogContent = content.querySelector('.og-content');

  //       gsap.to(ogContent, {
  //         autoAlpha: 0,
  //         height: 0,
  //         duration: 0.5,
  //         ease: "power2.in"
  //       });
  //     });
  //   });
  // }

  function offerGrid() {
    const offerContents = document.querySelectorAll(".offer-grid-content");
    const offerImages = document.querySelectorAll(".offer-grid-img");

    if (offerImages.length === 0) return;

    offerImages[0].classList.add("active");

    offerContents.forEach((content, index) => {
      const ogContent = content.querySelector(".og-content");
      gsap.set(ogContent, {
        autoAlpha: 0,
        height: 0,
        overflow: "hidden",
      });

      content.addEventListener("mouseenter", () => {
        if (index >= offerImages.length) return;
        offerImages.forEach((img) => img.classList.remove("active"));
        offerImages[index].classList.add("active");

        gsap.to(ogContent, {
          autoAlpha: 1,
          height: "auto",
          duration: 0.5,
          ease: "power2.out",
        });
      });

      content.addEventListener("mouseleave", () => {
        offerImages.forEach((img) => img.classList.remove("active"));
        offerImages[0].classList.add("active");

        gsap.to(ogContent, {
          autoAlpha: 0,
          height: 0,
          duration: 0.5,
          ease: "power2.in",
        });
      });
    });
  }

  // Memberd Cards
  const cards = gsap.utils.toArray(".testimonial-card");
  const lastCardIndex = cards.length - 1;

  const lastCardST = ScrollTrigger.create({
    trigger: cards[cards.length - 1],
    start: "center center",
  });

  cards.forEach((card, index) => {
    const rotation = index === lastCardIndex ? 0 : 1;
    const scaleDown = gsap.to(card, {
      rotation: rotation,
    });

    const startValue = window.matchMedia("(max-width: 1023px)").matches
      ? "top 100"
      : "top 200";
    ScrollTrigger.create({
      trigger: card,
      start: startValue,
      end: () => lastCardST.start,
      pin: true,
      pinSpacing: false,
      scrub: 0.5,
      ease: "none",
      animation: scaleDown,
      toggleActions: "restart none none reverse",
    });
  });

  // Video Vol
  function videoVolumeToggle() {
    document.querySelectorAll(".card video").forEach((video, idx) => {
      const volDiv = video.parentElement.querySelector(".vol");
      const svg = volDiv.querySelector("svg");
      const bars = svg.querySelectorAll("path");

      video.muted = true;

      volDiv.addEventListener("click", function () {
        video.muted = !video.muted;

        if (!video.muted) {
          bars.forEach((bar, i) => {
            gsap.to(bar, {
              scaleY: 1.5 + i * 0.2,
              transformOrigin: "bottom",
              repeat: -1,
              yoyo: true,
              duration: 0.4 + i * 0.1,
              ease: "power1.inOut",
            });
          });
        } else {
          bars.forEach((bar) => {
            gsap.killTweensOf(bar);
            gsap.to(bar, {
              scaleY: 1,
              duration: 0.2,
              clearProps: "all",
            });
          });
        }
      });
    });
  }

  videoVolumeToggle();

  // Img FadeUp Onscroll
  function imgAnimFadeUp() {
    document.querySelectorAll(".imgFadeup .imgAnim").forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
        },
      });
    });
  }

  // Call the function
  if (window.matchMedia("(min-width: 1024px)").matches) {
    // ... existing code ...
    imgAnimFadeUp();
  }

  // WellNess Image Animation
  // gsap.timeline()
  //   .set(".discover-grid", { autoAlpha: 1 })

  // gsap.defaults({
  //   duration: 0.55,
  //   ease: "expo.out",
  // });

  // const menuItems = document.querySelectorAll(".discover-item");

  // menuItems.forEach((item) => {
  //   const imageWrapper = item.querySelector(".discover-img");
  //   const imageWrapperBounds = imageWrapper.getBoundingClientRect();
  //   let itemBounds = item.getBoundingClientRect();

  //   const onMouseEnter = () => {
  //     gsap.set(imageWrapper, { scale: 0.8, yPercent: 50, rotation: 15 });
  //     gsap.to(imageWrapper, { opacity: 1, scale: 1, yPercent: 0, rotation: 15 });
  //   };
  //   const onMouseLeave = () => {
  //     gsap.to(imageWrapper, { opacity: 0, yPercent: -50, scale: 0.8, rotation: 15 });
  //   };
  //   const onMouseMove = ({ x, y }) => {
  //     let yOffset = itemBounds.top / imageWrapperBounds.height;
  //     yOffset = gsap.utils.mapRange(0, 1.5, -50, 50, yOffset);
  //     gsap.to(imageWrapper, {
  //       duration: 1.25,
  //       x: Math.abs(x - itemBounds.left) - imageWrapperBounds.width / 1.55,
  //       y: Math.abs(y - itemBounds.top) - imageWrapperBounds.height / 2 - yOffset,
  //     });
  //   };

  //   item.addEventListener("mouseenter", onMouseEnter);
  //   item.addEventListener("mouseleave", onMouseLeave);
  //   item.addEventListener("mousemove", onMouseMove);

  //   window.addEventListener("resize", () => {
  //     itemBounds = item.getBoundingClientRect();
  //   });
  // });

  const link = document.querySelectorAll(".discover-item");
  const linkHoverReveal = document.querySelectorAll(".discover-img");
  const linkImages = document.querySelectorAll(".hidden-img");

  for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("mousemove", (e) => {
      linkHoverReveal[i].style.opacity = 1;
      linkHoverReveal[i].style.transform =
        `translate(-170%, -50% ) rotate(5deg)`;
      linkImages[i].style.transform = "scale(1, 1)";
      linkHoverReveal[i].style.left = e.clientX + "px";
    });

    link[i].addEventListener("mouseleave", (e) => {
      linkHoverReveal[i].style.opacity = 0;
      linkHoverReveal[i].style.transform =
        `translate(-50%, -50%) rotate(-5deg)`;
      linkImages[i].style.transform = "scale(0.8, 0.8)";
    });
  }

  // Tootltip
  document
    .querySelectorAll(".img-tooltip .info-grid, .our-team .info-grid")
    .forEach(function (infoGrid) {
      infoGrid.addEventListener("mouseenter", function () {
        document.body.classList.add("tooltip-active");
      });

      infoGrid.addEventListener("mouseleave", function () {
        document.body.classList.remove("tooltip-active");
      });
    });

  // Enquiry Form
  document
    .querySelector(".btn-link")
    .addEventListener("click", function (event) {
      event.preventDefault();
      document.querySelector(".enquire-form").classList.toggle("active");
    });
};

export default initCustom;
