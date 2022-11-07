let test = document.getElementById("#test");
let bright = document.getElementById("#bright");

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
