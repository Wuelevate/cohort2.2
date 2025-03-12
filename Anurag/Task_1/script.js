document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const courseSelect = document.getElementById("course");
    const messageInput = document.getElementById("message");
    const charCount = document.getElementById("char-count");

    // Character counter update
    messageInput.addEventListener("input", () => {
        charCount.textContent = `Character count: ${messageInput.value.length}`;
    });

    // Prevent form submission if fields are empty
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default submission
        
        if (
            nameInput.value.trim() === "" ||
            emailInput.value.trim() === "" ||
            courseSelect.value === "" ||
            messageInput.value.trim() === ""
        ) {
            alert("Please fill in all the fields before submitting.");
            return; // Stop execution
        }

        // Store form data in localStorage
        localStorage.setItem("name", nameInput.value);
        localStorage.setItem("email", emailInput.value);
        localStorage.setItem("course", courseSelect.value);
        localStorage.setItem("message", messageInput.value);

        // Redirect to the Thank You page
        window.location.href = "thankyou.html";
    });
});
