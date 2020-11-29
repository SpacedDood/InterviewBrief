console.log("Hello!");

var termsOpen = false;
var termsContent = document.getElementById("terms-content");
document.getElementById("terms-button").onclick = function () {
  termsOpen = !termsOpen;
  if (termsOpen) {
    termsContent.style.display = "block"
  } else {
    termsContent.style.display = "none"
  }
  console.log("Terms Clicked");
}
