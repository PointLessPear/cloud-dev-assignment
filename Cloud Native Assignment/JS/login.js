getLogin0 = "https://prod-62.westeurope.logic.azure.com/workflows/0bc04945bbbe4941b03c2c1365c635dd/triggers/manual/paths/invoke/rest/drivers/login/{username}/{password}"

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");


    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", async e => {
        e.preventDefault();
    
        // Get the user input
        const username = loginForm.querySelector('input[type="text"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;
    
        // Construct the URL for the Azure endpoint
        const apiUrl = `https://prod-62.westeurope.logic.azure.com/workflows/0bc04945bbbe4941b03c2c1365c635dd/triggers/manual/paths/invoke/rest/drivers/login/${encodeURIComponent(username)}/${encodeURIComponent(password)}?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=6P_NlI8blVS61OFfa7Hug7wrU_PZtvXBpJIEbNPIBZo`;
    
        try {
            // Make a request to the Azure endpoint
            const response = await fetch(apiUrl, {
                method: 'GET'
            });
    
            if (response.ok) {
                // If the login is successful, redirect to index.html
                window.location.href = 'index.html';
            } else {
                // If the login is unsuccessful, show an error message
                setFormMessage(loginForm, "error", "Invalid username/password combination");
            }
        } catch (error) {
            // Handle any other errors
            console.error('Error during login:', error);
            setFormMessage(loginForm, "error", "Login failed. Please try again later.");
        }
    });
    

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});