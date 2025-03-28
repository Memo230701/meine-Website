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

const zitate = [
  {
    text: "Phantasie ist wichtiger als Wissen, denn Wissen ist begrenzt.",
    autor: "Albert Einstein"
  },
  {
    text: "Wer immer tut, was er schon kann, bleibt immer das, was er schon ist.",
    autor: "Henry Ford"
  },
  {
    text: "Zwei Dinge sind unendlich: das Universum und die menschliche Dummheit. Aber beim Universum bin ich mir nicht ganz sicher.",
    autor: "Albert Einstein"
  },
  {
    text: "Nichts in der Geschichte des Lebens ist beständiger als der Wandel.",
    autor: "Charles Darwin"
  },
  {
    text: "Fortschritt entsteht nur außerhalb der Komfortzone.",
    autor: "Thomas Edison"
  }
];

// Zitat anzeigen
function zeigeZufallsZitat() {
  const zufall = Math.floor(Math.random() * zitate.length);
  const zitat = zitate[zufall];
  document.getElementById("zitat-text").textContent = `"${zitat.text}"`;
  document.getElementById("zitat-autor").textContent = `– ${zitat.autor}`;
}

// Beim Laden ausführen
zeigeZufallsZitat();

