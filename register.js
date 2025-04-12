gsap.from(".register-container", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power2.out",
});

document.getElementById("register-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    if (username.length < 3) {
        alert("Username must be at least 3 characters long.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    alert("Registration successful! Welcome to Bull Brain.");
    window.location.href = "main.html"; 
});