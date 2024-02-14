// ========= CURSOR ANIMATION =========
let cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (event) => {
  onMouseMove(event);
});
function onMouseMove(event) {
  cursor.style.background =
    "radial-gradient(600px at " +
    event.clientX +
    "px " +
    event.clientY +
    "px,rgba(29, 78, 216, 0.15),transparent 80%)";
}
// ========= scroll ANIMATION =========
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".nav a");
let sectionHeader = document.querySelectorAll(".sticky");
// ========= EVENTS =========
if (navLinks && sectionHeader && sections) {
  window.addEventListener("scroll", () => {
    activeLink();
    activeHeader();
    revealElements();
  });
}
window.addEventListener("load", revealElements);
// ========= HANDLER FUNCTIONS =========
function activeLink() {
  sections.forEach((sec) => {
    if (window.scrollY >= sec.offsetTop - sec.clientHeight / 4) {
      navLinks.forEach((link) => {
        if (link.href.includes(sec.id)) {
          if (link.classList.contains("active-link")) return;
          else activeIndicator(link);
        }
      });
    }
  });
}
function activeIndicator(link) {
  document.querySelector(".active-link").classList.remove("active-link");
  document.querySelector(".active").classList.remove("active");
  link.classList.add("active-link");
  link.previousElementSibling.classList.add("active");
}
// ============================
function activeHeader() {
  sectionHeader.forEach((head) => {
    if (window.scrollY >= head.offsetTop) {
      head.style.position = "sticky";
      head.style.top = "0";
      head.style.backdropFilter = "blur(10px)";
      head.style.zIndex = "4";
    } else head.style = "";
  });
}
// ===========================
function revealElements() {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let secTop = sec.offsetTop - 400;
    let secHeight = sec.offsetHeight;
    if (sec.id === "about") {
      sec.classList.add("animate");
    } else if (top >= secTop) {
      sec.classList.add("animate");
    }
  });
}
