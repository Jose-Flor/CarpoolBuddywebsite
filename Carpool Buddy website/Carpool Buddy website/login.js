document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Collect form data
    const formData = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        isDriver: selectedDriver // Assuming selectedDriver is a global variable storing driver selection
    };

    // Send data to backend using AJAX
    fetch("/create-account/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    }).then(response => {
        if (response.ok) {
            // Handle successful response
            alert("Account created successfully!");
            // Optionally, redirect to another page
            window.location.href = "/signin";
        } else {
            // Handle error response
            response.json().then(data => {
                alert("Failed to create account. Error: " + data.error);
            });
        }
    }).catch(error => {
        console.error("Error:", error);
        alert("An unexpected error occurred. Please try again later.");
    });
});