//header toggle

let menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", function (e) {
  document.querySelector("body").classList.toggle("mobile_nav_active");
  this.classList.toggle("fa-xmark");
});

//Typing effect

let typed = new Typed(".auto_input", {
  strings: ["Software Engineer!", "Web Developer!", "Front-End Engineer!"],
  typedSpeed: 100,
  backSpeed: 100,
  backDelay: 2000,
  loop: true,
});
