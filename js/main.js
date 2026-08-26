const button = document.getElementById("helloButton");

const message = document.getElementById("message");


button.addEventListener("mouseenter", function() {

    message.textContent = "Hello! Thanks for visiting my website";

});