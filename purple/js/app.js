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

// modal window
// get modal element
var modal = document.getElementById("commentsModal");
// get open modal button
var modalBtn = document.getElementById("modalBtn");
// get close modal button
var closeBtn = document.getElementsByClassName("closeBtn")[0];

// Listen for open click
modalBtn.addEventListener("click", openModal);
// listen for close click
closeBtn.addEventListener("click", closeModal);
// Listen for outside click
window.addEventListener("click", clickOutside);

// function to open modal
function openModal() {
  modal.style.display = "block";
}

// function to close modal
function closeModal() {
  modal.style.display = "none";
}

// function to close modal if outside click
function clickOutside(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
