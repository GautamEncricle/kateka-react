const initAccordion = () => {
  document.querySelectorAll(".acc-body").forEach((body, index) => {
    if (index === 0) {
      body.style.maxHeight = body.scrollHeight + "px";
      body.previousElementSibling.classList.add("active");
      body.classList.add("active");
    } else {
      body.style.maxHeight = "0";
    }
    body.style.overflow = "hidden";
    body.style.transition = "max-height 0.5s ease";
  });

  document.querySelectorAll(".acc-head").forEach((head) => {
    head.addEventListener("click", function () {
      const body = this.nextElementSibling;
      if (body.style.maxHeight && body.style.maxHeight !== "0px") {
        body.style.maxHeight = "0";
        this.classList.remove("active");
        body.classList.remove("active");
      } else {
        // पहले सभी accordion बंद करें
        document.querySelectorAll(".acc-body").forEach((b) => {
          b.style.maxHeight = "0";
          b.previousElementSibling.classList.remove("active");
          b.classList.remove("active");
        });

        // फिर नया वाला खोलें
        body.style.maxHeight = body.scrollHeight + "px";
        this.classList.add("active");
        body.classList.add("active");
      }
    });
  });
};

export default initAccordion;
