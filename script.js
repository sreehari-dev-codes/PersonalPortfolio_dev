function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
 

}

document.getElementById("contact-info-btn").addEventListener("click", function () {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});
function scrollToExperience() {
  document.getElementById("experience").scrollIntoView({ behavior: "smooth" });
}
