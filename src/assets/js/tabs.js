const initTabs = () => {
  document
    .querySelectorAll(".tabs-stage .tab-content")
    .forEach((div, index) => {
      if (index === 0) {
        div.style.display = "block";
      } else {
        div.style.display = "none";
      }
    });

  document
    .querySelector(".tabs-nav li:first-child")
    ?.classList.add("tab-active");

  document.querySelectorAll(".tabs-nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();

      document.querySelectorAll(".tabs-nav li").forEach((li) => {
        li.classList.remove("tab-active");
      });

      this.parentElement.classList.add("tab-active");

      document.querySelectorAll(".tabs-stage .tab-content").forEach((div) => {
        div.style.display = "none";
      });

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.style.display = "block";
      }
    });
  });
};

export default initTabs;
