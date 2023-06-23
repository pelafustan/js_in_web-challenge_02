function changeBorder() {
    let image = document.getElementsByClassName("clickable")[0];
    
    if (getComputedStyle(image)["border"].match(/none/g)) {
        image.style.border = "2px solid blue";
    } else {
        image.style.border = "none";
    }
}

function checkOrder() {
    k1 = parseInt(document.getElementById("kitten1").value);
    k2 = parseInt(document.getElementById("kitten2").value);
    k3 = parseInt(document.getElementById("kitten3").value);

    total = k1 + k2 + k3;

    let message_container = document.getElementById("portrait-message");

    if (total > 10) {
        message_container.innerText = "You cannot add more than 10 portraits to your cart. You have " + total + " in your cart.";
        message_container.classList.add("too-much");
    } else {
        message_container.innerText = "You have " + total + " portraits in your cart.";
    }
}

function passwordChecker() {
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;
    let third = document.getElementById("third-number").value;
    let pass = first + second + third;
    let message_container = document.getElementById("password-message");
    let message = "";

    message_container.classList.remove("too-much");

    if (pass == "911") {
        message = "Valid Password 1.";
    } else if (pass == "714") {
        message = "Valid Password 2.";
    } else {
        message = "Incorrect password.";
        message_container.classList.add("too-much");
    }

    message_container.innerText = message;

}
