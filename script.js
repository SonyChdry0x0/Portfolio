// Typed.js initialization
var typed = new Typed(".typing", {
  strings: ["Frontend Developer", "UI/UX Designer", "Student"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});


let animated = false;

window.addEventListener("scroll", () => {
  const skillsSection = document.getElementById("skills");
  const sectionPos = skillsSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight;

  if (!animated && sectionPos < screenPos) {
    document.querySelectorAll(".progress").forEach((el) => {
      const targetWidth = el.getAttribute("data-width");
      if (targetWidth) {
        el.style.width = targetWidth;
      }
    });
    animated = true; 
  }
});
