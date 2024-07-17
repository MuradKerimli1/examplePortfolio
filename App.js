const navbarLinks = document.querySelectorAll(".navbar a");

navbarLinks.forEach((link) => {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    navbarLinks.forEach((otherLink) => {
      otherLink.style.borderBottom = "none";
    });
    this.style.borderBottom = "3px solid  #00ffee";
  });
});
