function closePopup() {
    const popup = document.getElementById("popup");
    const surveyForm = document.getElementById("survey-form");
    popup.style.display = "none";
    surveyForm.reset();
}

document.addEventListener("DOMContentLoaded", function () {
    const firstNameInput = document.getElementById("first-name");
    const firstNameError = document.getElementById("fname-error");
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("email-error");

    firstNameInput.addEventListener("input", function () {
        if (firstNameInput.value.length < 3) {
            firstNameError.textContent = "First Name should be at least 3 characters.";
        } else {
            firstNameError.textContent = "";
        }
    });

    emailInput.addEventListener("input", function () {
        if (!isValidEmail(emailInput.value)) {
            emailError.textContent = "Please enter a valid email.";
        } else {
            emailError.textContent = "";
        }
    });

    document.getElementById("survey-form").addEventListener("submit", function (e) {
        e.preventDefault();

        const firstName = firstNameInput.value;
        const email = emailInput.value;
        const firstTime = document.querySelector('input[name="first-time"]:checked').value;
        const suggestion = document.querySelector('input[name="suggestion"]:checked').value;
        const satisfaction = document.querySelector('input[name="satisfaction"]:checked').value;
        const suggestions = document.getElementById("suggestions").value;

        const popup = document.getElementById("popup");
        const results = document.getElementById("results");
        results.innerHTML = `
            <p>First Name: ${firstName}</p>
            <p>Email: ${email}</p>
            <p>Is this your first time using our products and services? ${firstTime}</p>
            <p>Would you suggest our products and services to your friends and colleagues? ${suggestion}</p>
            <p>How satisfied are you with our company overall? ${satisfaction}</p>
            <p>Do you have any suggestions to improve our service? ${suggestions}</p>
        `;
        popup.style.display = "block";
    });

    function isValidEmail(email) {
        const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        return emailRegex.test(email);
    }
});
