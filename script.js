// Burger Menü Toggle Handy
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

mobileMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

const toggle = document.getElementById("dark-toggle");
const body = document.body;

// Funktion: Modus wechseln + speichern + Button-Icon
function enableDarkMode() {
  body.classList.add("dark-mode");
  toggle.textContent = "☀️";
  toggle.classList.add("rotate");
  localStorage.setItem("darkMode", "enabled");
}

function disableDarkMode() {
  body.classList.remove("dark-mode");
  toggle.textContent = "🌙";
  toggle.classList.remove("rotate");
  localStorage.setItem("darkMode", "disabled");
}

// Check: Dark Mode gespeichert?
if (localStorage.getItem("darkMode") === "enabled") {
  enableDarkMode();
} else {
  disableDarkMode();
}

// Toggle bei Klick
toggle.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});

