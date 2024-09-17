document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".login-form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        clearErrors();

        let isValid = true;
        if (!validateEmail(emailInput.value)) {
            showError(emailInput, "Por favor, insira um e-mail válido.");
            isValid = false;
        }

        if (passwordInput.value.length < 6) {
            showError(passwordInput, "A senha deve ter pelo menos 6 dígitos.");
            isValid = false;
        }

        if (isValid) {
            form.submit();

            var currentUrl = window.location.href;
            var url = new URL(currentUrl);
            var pathName = url.pathname;
            var pathParts = pathName.split('/');
            pathParts.pop();
            var newPathName = pathParts.join("/");
            url.pathname = newPathName + "//assets/pages/dashboard.html";
            window.location.href = url.href;
        }
    });

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function showError(input, message) {
        const errorElement = document.createElement("span");
        errorElement.classList.add("error-message");
        errorElement.textContent = message;
        input.parentElement.appendChild(errorElement);
        input.classList.add("error");
    }

    function clearErrors() {
        const errorMessages = document.querySelectorAll(".error-message");
        errorMessages.forEach(error => error.remove());

        const inputs = document.querySelectorAll(".login-form input");
        inputs.forEach(input => input.classList.remove("error"));
    }
});
