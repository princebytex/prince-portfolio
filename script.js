function showGreeting() {
  const hour = new Date().getHours();
  let greet = "Good Evening";

  if (hour < 12) {
    greet = "Good Morning";
  } else if (hour < 18) {
    greet = "Good Afternoon";
  }

  document.getElementById("helloMsg").textContent =
    greet + "! Welcome to my portfolio \u{1F60A}";
}

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

function setActiveLink() {
  let current = "home";
  const position = window.scrollY + 140;

  sections.forEach(function (section) {
    if (position >= section.offsetTop) {
      current = section.id;
    }
  });

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
    current = "contact";
  }

  navLinks.forEach(function (link) {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === "#" + current,
    );
  });
}

window.addEventListener("scroll", setActiveLink);
setActiveLink();
