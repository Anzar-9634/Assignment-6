const themeSwitch = document.getElementById("themeSwitch");

themeSwitch.addEventListener("change", function () {
  document.body.classList.toggle("light-theme");
});