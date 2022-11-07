let test = document.getElementById("#test");
let bright = document.getElementById("#bright");
let light = document.getElementById(".social-media-icons");

test.addEventListener("mouseover", function(e) {

    // highlight the mouseout target
  e.target.style.color = "#E8F0E4";

  // reset the color after a short delay
  setTimeout(function() {
    e.target.style.color = "";
  }, 1000);
}, false);

bright.addEventListener("mouseover", function(e) {
  e.target.style.color = "#E8F0E4";

  setTimeout(function() {
    e.target.style.color = "";
  }, 1000);
}, false);

light.addEventListener("mouseover", function(e) {
  e.target.style.color = "#EEE4F0";

  setTimeout(function() {
    e.target.style.color = "";
  }, 1000);
}, false);