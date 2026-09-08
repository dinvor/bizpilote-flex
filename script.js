
function toggleMenu() {
const menu = document.getElementById("nav-mobile");
menu.classList.toggle("show");
}

function autoThemeByHour() {
const hour = new Date().getHours();
document.documentElement.setAttribute("data-theme", hour >= 7 && hour < 19 ? "light" : "dark");
}

function setTheme(theme) {
document.documentElement.setAttribute("data-theme", theme);
}

autoThemeByHour();
setInterval(autoThemeByHour, 60 * 60 * 1000);

