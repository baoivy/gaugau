function showForm() {
    overlay.style.display = "block";
    var modal = document.getElementById("formContainer");
    modal.style.display = "block";
}

// Function to hide the modal form when the close button is clicked
document.addEventListener("DOMContentLoaded", function () {

    var closeButtons = document.getElementsByClassName("close");
    for (var i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener("click", function () {
            var modal = this.parentElement.parentElement.parentElement;
            modal.style.display = "none";
            overlay.style.display = "none";
        });
    }
}
);

// Function to hide the modal form when clicking outside of it
window.addEventListener("click", function (event) {

    var modal = document.getElementById("formContainer");
    if (event.target == modal) {
        modal.style.display = "none";
        overlay.style.display = "none";
    }
});
