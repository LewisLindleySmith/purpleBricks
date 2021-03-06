// Click event
var hideBtn = document.getElementById("hideBtn");
var buyerDetails = document.getElementById("buyerDetails");
var chevronUp = document.getElementById("chevronUp");
var changeText = document.getElementById("changeText");

hideBtn.addEventListener("click", function () {
  buyerDetails.classList.toggle("active");

  chevronUp.classList.toggle("rotated");

  if (changeText.innerHTML === "show") {
    changeText.innerHTML = "hide";
  } else {
    changeText.innerHTML = "show";
  }

  // Text change
  // Toggle btn class "open"
});

//view extras modal window
var viewModal = document.getElementById("viewModal");
var viewModalBtn = document.getElementById("viewBtn");
var closeBtn = document.getElementsByClassName("closeBtn")[0];

//event listeners
viewBtn.addEventListener("click", openViewModal);
closeBtn.addEventListener("click", closeViewModal);
window.addEventListener("click", clickOutsideView);

// function to open modal
function openViewModal() {
  viewModal.style.display = "block";
}

// function to close modal
function closeViewModal() {
  viewModal.style.display = "none";
}

// function to close modal if outside click
function clickOutsideView(e) {
  if (e.target == viewModal) {
    viewModal.style.display = "none";
  }
}

// modal window
// get modal element
var modal = document.getElementById("commentsModal");
// get open modal button
var modalBtn = document.getElementById("modalBtn");
// get close modal button
var closeBtn = document.getElementsByClassName("closeBtn")[1];

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
