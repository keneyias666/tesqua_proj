document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const userData = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        gender: document.getElementById("gender").value,
        password: document.getElementById("password").value,
        confirmPassword: document.getElementById("confirm-password").value
    };

    // Check if passwords match
    if (userData.password !== userData.confirmPassword) {
        alert('Passwords do not match!');
        return; // Prevent further execution and stop form submission
    }
    fetch("http://localhost:3000/save-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
    })
        .then(response => response.json())
        .then(data => {
            alert(`User saved successfully! Your UID: ${data.uid}`);
            document.getElementById("signup-form").reset();
        })
        .catch(error => console.error("Error:", error));
});
