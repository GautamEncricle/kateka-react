const initSlider = () => {
  if (document.querySelector(".slider-with-content")) {
    const swiper = new Swiper(".safari-slider", {
      slidesPerView: 1.3,
      spaceBetween: 30,
      centerSlides: true,
      loop: true,
      speed: 1000,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
          return (
            '<span class="' +
            currentClass +
            '"></span> <span>-</span> <span class="' +
            totalClass +
            '"></span>'
          );
        },
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1.3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 1.3,
          spaceBetween: 30,
        },
      },
    });

    // Slide change event
    swiper.on("slideChange", function () {
      const activeIndex = swiper.realIndex;
      const sliderContents = document.querySelectorAll(".slider-left-content");
      sliderContents.forEach((content, index) => {
        if (index === activeIndex) {
          content.classList.add("active");
        } else {
          content.classList.remove("active");
        }
      });
    });

    // Initialize first slide content
    document
      .querySelector('.slider-left-content[data-slide="0"]')
      .classList.add("active");
  }

  if (document.querySelector(".gallery-slider-wrapper")) {
    const galleryThumbs = new Swiper(".gallery-thumb-slider", {
      slidesPerView: 5,
      spaceBetween: 17,
      watchSlidesProgress: true,
      loop: false,
      speed: 1000,
    });
    const progressBar = document.querySelector(".progress-bar");
    const gallerySlider = new Swiper(".gallery-slider", {
      slidesPerView: 1,
      spaceBetween: 0,
      centerSlides: false,
      loop: true,
      speed: 1500,
      thumbs: {
        swiper: galleryThumbs,
      },
    });

    let interval = null;
    let progress = 0;
    const duration = 10000;
    let isPaused = false;

    function startProgressBar() {
      progress = 0;
      if (progressBar) progressBar.style.width = "0%";
      if (interval) clearInterval(interval);
      interval = setInterval(() => {
        if (!isPaused) {
          progress += 20;
          let percent = Math.min(100, (progress / duration) * 100);
          if (progressBar) progressBar.style.width = percent + "%";
          if (percent >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              gallerySlider.slideNext();
            }, 100);
          }
        }
      }, 20);
    }

    // Mouse events for pause/resume
    const gallerySliderEl = document.querySelector(".gallery-slider");
    if (gallerySliderEl) {
      gallerySliderEl.addEventListener("mouseenter", () => {
        isPaused = true;
      });
      gallerySliderEl.addEventListener("mouseleave", () => {
        isPaused = false;
      });
    }

    gallerySlider.on("slideChange", () => {
      startProgressBar();
    });
    startProgressBar();
  }
};
export default initSlider;
