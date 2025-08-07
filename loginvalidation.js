const loginForm = document.querySelector("form[name='login']");

const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const submitButton = document.querySelector("input[type='submit']");

const INVALID_FIELD_CSS_STYLE = 'invalid';
const DISABLED_BUTTON_STYLE = 'disabled-btn';

const emailErrorMessage = document.querySelector("#email-error-message");
const passwordErrorMessage = document.querySelector("#password-error-message");

let is_email_valid = [false, ""];
let is_password_valid = [false, ""];

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    is_email_valid = validate_email(emailInput.value);
    is_password_valid = validate_password(passwordInput.value);

    if ( !is_email_valid[0] ) {
        emailErrorMessage.innerHTML = is_email_valid[1];
    }
    else if ( !is_password_valid[0] ) {
        passwordErrorMessage.innerHTML = is_password_valid[1];
    }
    else {
        alert('Submitted successfully');
        loginForm.submit();
    }
});

loginForm.addEventListener('change', function () {
    if(is_email_valid[0] && is_password_valid[0]) {
        enable_submit_btn();
    }
});


emailInput.addEventListener("change", function () {
    is_email_valid = validate_email(emailInput.value);

    if (is_email_valid[0]) {
        emailInput.classList.remove(INVALID_FIELD_CSS_STYLE);
    } else {
        disable_submit_btn();
        if( !emailInput.classList.contains(INVALID_FIELD_CSS_STYLE)) {
            emailInput.classList.add(INVALID_FIELD_CSS_STYLE);
        }
    }
    emailErrorMessage.innerHTML = is_email_valid[1];
});

passwordInput.addEventListener("change", function () {
    is_password_valid = validate_password(passwordInput.value);

    if (is_password_valid[0]) {
        passwordInput.classList.remove(INVALID_FIELD_CSS_STYLE);
    } else {
        disable_submit_btn();
        if( !passwordInput.classList.contains(INVALID_FIELD_CSS_STYLE)) {
            passwordInput.classList.add(INVALID_FIELD_CSS_STYLE);
        }
    }
    passwordErrorMessage.innerHTML = is_password_valid[1];
});

function validate_email(email) {
    if(email.includes("@")) return [true,''];
    else return [false, "Email must include the '@' symbol"];
}

function validate_password(pwd) {
    if(pwd.length < 8) return [false, "Password should be at least 8 characters"];
    else return [true,''];
}

function disable_submit_btn() {
    submitButton.disabled = true;
    if(!submitButton.classList.contains(DISABLED_BUTTON_STYLE) ){
        submitButton.classList.add(DISABLED_BUTTON_STYLE);
    }
}

function enable_submit_btn() {
    submitButton.disabled = false;
    submitButton.classList.remove(DISABLED_BUTTON_STYLE);
}