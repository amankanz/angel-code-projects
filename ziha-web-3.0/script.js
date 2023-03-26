//header toggle

let menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", function (e) {
  document.querySelector("body").classList.toggle("mobile_nav_active");
  this.classList.toggle("fa-xmark");
});
