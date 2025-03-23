// Burger Menü Toggle Handy
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

mobileMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

const toggle = document.getElementById("dark-toggle");
const body = document.body;

// Check: war Dark Mode gespeichert?
if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
  toggle.textContent = "☀️";
} else {
  toggle.textContent = "🌙";
}

// Umschalten bei Klick
toggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Aktuellen Status speichern
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
    toggle.textContent = "☀️";
  } else {
    localStorage.setItem("darkMode", "disabled");
    toggle.textContent = "🌙";
  }
});
