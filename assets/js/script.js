// Fancy element toggle function
const toggleClass = (elem, className) => elem.classList.toggle(className);

/**
 * Fancy header sticky & go to top
 */
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", () => {
  toggleClass(header, "active", window.scrollY >= 10);
  toggleClass(goTopBtn, "active", window.scrollY >= 10);
});

/**
 * Fancy navbar toggle
 */
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", () => {
  [navToggleBtn, navbar, document.body].forEach(elem => toggleClass(elem, "active"));
});

/**
 * Fancy skills toggle
 */
const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

toggleBtns.forEach(toggleBtn => {
  toggleBtn.addEventListener("click", () => {
    [toggleBtnBox, ...toggleBtns, skillsBox].forEach(elem => toggleClass(elem, "active"));
  });
});

/**
 * Fancy dark & light theme toggle
 */
const themeToggleBtn = document.querySelector("[data-theme-btn]");
const THEME_KEY = "theme";

themeToggleBtn.addEventListener("click", () => {
  toggleClass(themeToggleBtn, "active");

  const isLightTheme = themeToggleBtn.classList.contains("active");
  const themeClass = isLightTheme ? "light_theme" : "dark_theme";

  document.body.classList.remove(isLightTheme ? "dark_theme" : "light_theme");
  document.body.classList.add(themeClass);

  localStorage.setItem(THEME_KEY, themeClass);
});

/**
 * Check & apply last time selected theme from localStorage
 */
const savedTheme = localStorage.getItem(THEME_KEY) || "dark_theme";
toggleClass(themeToggleBtn, "active", savedTheme === "light_theme");
document.body.classList.add(savedTheme);
