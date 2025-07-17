const initFilter = () => {
  const btn = document.getElementById("dropdownBtn");
  const menu = document.getElementById("dropdownMenu");
  const selected = document.getElementById("selectedOption");

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  menu.addEventListener("click", (e) => {
    if (e.target.matches("li")) {
      selected.textContent = e.target.dataset.value;
      menu.classList.add("hidden");
    }
  });

  // Optional: click outside to close
  window.addEventListener("click", (e) => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.add("hidden");
    }
  });

  document.querySelectorAll(".filter-btn-link").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");
      const items = document.querySelectorAll(".gallery-item");

      items.forEach((item) => {
        const category = item.getAttribute("data-category");
        if (filter === "all" || filter === category) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });

      // Optional: Active class on button
      document
        .querySelectorAll(".filter-btn-link")
        .forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });
};
export default initFilter;
