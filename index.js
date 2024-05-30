function toggleMenu() {
    var navbarLinks = document.getElementById('navbar-links');
    navbarLinks.classList.toggle('active');
}
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btns = document.getElementsByClassName("login_button");
var btns1 = document.getElementsByClassName("login");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function() {
        modal.style.display = "block";
    }
}
for (var i = 0; i < btns1.length; i++) {
    btns[i].onclick = function() {
        modal.style.display = "block";
    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
