// Click event
var hideBtn = document.getElementById("hideBtn");
var buyerDetails = document.getElementById("buyerDetails");
var chevronUp = document.getElementById("chevronUp");
var test = document.getElementById("test");

hideBtn.addEventListener("click", function () {
  buyerDetails.classList.toggle("active");

  chevronUp.classList.toggle("rotated");

  if (test.innerHTML === "show") {
    test.innerHTML = "hide";
  } else {
    test.innerHTML = "show";
  }

  // Text change
  // Toggle btn class "open"
});
