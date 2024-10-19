const mobileBars = document.getElementById("mobile-bars");
const navItems = document.getElementById("nav-items");

mobileBars.addEventListener("click", () => {
  navItems.classList.toggle("nav-items-active");
});
