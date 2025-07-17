// import gsap from 'gsap'

const initHeader = () => {
  // Menu Start
  let menuIsOpen = false;

  const menuOpen = () => {
    const navContainer = document.querySelector(".nav-container");
    const menuIcons = document.querySelectorAll(".menu-icon");
    document.documentElement.classList.add("menu-open");
    menuIcons.forEach((icon) => icon.classList.add("active"));
    navContainer.style.pointerEvents = "auto";
    navContainer.classList.remove("hidden");
    menuIsOpen = true;
  };

  const menuClose = () => {
    const navContainer = document.querySelector(".nav-container");
    const menuIcons = document.querySelectorAll(".menu-icon");
    document.documentElement.classList.remove("menu-open");
    // document.body.classList.remove('menu-open')
    menuIcons.forEach((icon) => icon.classList.remove("active"));
    navContainer.style.pointerEvents = "none";
    menuIsOpen = false;
  };

  const t1 = gsap.timeline({
    paused: true,
    onStart: menuOpen,
    onReverseComplete: () => {
      menuClose();
      setTimeout(() => {
        document.querySelector(".nav-container").classList.add("hidden");
      }, 600);
    },
  });

  t1.fromTo(
    ".nav-container",
    {
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
      display: "block",
      opacity: 0,
    },
    {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      opacity: 1,
      duration: 0.6,
      ease: "Power3.InOut",
    },
  );

  t1.from(
    ".mainnav__primary_menu_left ul, .menu-wrapper-bottom ul, .mainnav__primary_menu_left .header-right",
    {
      opacity: 0,
      y: 20,
      ease: "Power3.InOut",
      stagger: 0.1,
    },
    "-=0.3",
  );

  document.querySelectorAll(".menu-icon").forEach((menuIcon) => {
    menuIcon.addEventListener("click", () => {
      if (!menuIsOpen) {
        t1.play();
      } else {
        t1.reverse();
      }
    });
  });

  // Sticky Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
      header.classList.add("sticky-header");
    } else {
      header.classList.remove("sticky-header");
    }
  });

  // Function to fade in images
  function fadeInImages() {
    gsap.fromTo(
      ".img1, .img2, .img3",
      { opacity: 0, y: 20 }, // Start with opacity 0 and slightly below
      { opacity: 1, y: 0, duration: 2, stagger: 0.5 }, // Fade in and move to original position one by one
    );
  }

  // Event listener for menu icon click
  const menuIcon = document.querySelector(".menu-icon");
  menuIcon.addEventListener("click", function () {
    const navContainer = document.querySelector(".main-nav.nav-container");
    navContainer.classList.toggle("hidden");
    if (!navContainer.classList.contains("hidden")) {
      fadeInImages();
    }
  });
};

export default initHeader;
