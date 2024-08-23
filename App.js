const navbarLinks = document.querySelectorAll(".navbar a");

navbarLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navbarLinks.forEach((otherLink) => {
      otherLink.classList.remove("active");
      if (otherLink.classList.contains("active")) {
        this.classList.remove("active");
      } else {
        this.classList.add("active");
      }

      otherLink.style.borderBottom = "none";
    });
    this.style.borderBottom = "3px solid  #00ffee";
  });
});
