// GSAP Animations
gsap.from(".login-container", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power2.out",
});

// Form Validation
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simulate login validation
    if (email === "user@example.com" && password === "password123") {
        alert("Login successful! Redirecting to your dashboard.");
        window.location.href = "#"; // Redirect to dashboard or home page
    } else {
        alert("Invalid email or password. Please try again.");
    }
});