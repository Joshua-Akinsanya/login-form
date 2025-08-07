const signupForm = document.querySelector("form[name='signup']");

const nameInput = document.querySelector("#name-input");
const dateInput = document.querySelector("#date-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const submitButton = document.querySelector("input[type='submit']");

const nameErrorMessage = document.querySelector("#name-error-message");
const dateErrorMessage = document.querySelector("#date-error-message");
const emailErrorMessage = document.querySelector("#email-error-message");
const passwordErrorMessage = document.querySelector("#password-error-message");

const INVALID_FIELD_CSS_STYLE = 'invalid';
const DISABLED_BUTTON_STYLE = 'disabled-btn';

let is_name_valid = [false, ""];
let is_date_valid = [true, ""];
let is_email_valid = [false, ""];
let is_password_valid = [false, ""];

signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    is_name_valid = validate_name(nameInput.value);
    is_email_valid = validate_email(emailInput.value);
    is_password_valid = validate_password(passwordInput.value);

    if (is_name_valid[0] && is_email_valid[0] && is_password_valid[0]) {
        alert('Submitted Successfully!');
        signupForm.submit();
    }
});

signupForm.addEventListener("change", function (){
    if(is_name_valid[0] && is_date_valid[0] && is_email_valid[0] && is_password_valid[0]){
        enable_submit_btn();
    }
});

nameInput.addEventListener("change", function () {
    is_name_valid = validate_name(nameInput.value);

    if(is_name_valid[0]) {
        nameInput.classList.remove(INVALID_FIELD_CSS_STYLE);
    } else {
        disable_submit_btn();
        if( !nameInput.classList.contains(INVALID_FIELD_CSS_STYLE) ) {
            nameInput.classList.add(INVALID_FIELD_CSS_STYLE);
        }
    }
    nameErrorMessage.innerHTML = is_name_valid[1];
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

function validate_name(name) {
    check_for_numbers = name.search(/[0-9]/);

    if( check_for_numbers >= 0 ) { 
        return [false, "Name must not include numbers"];
    }
    else return [true, ''];
}

function validate_email(email) {
    if(email.includes("@")) return [true,''];
    else return [false, "Email must include the '@' symbol"];
}

function validate_password(pwd) {
    console.log("Length: "+ pwd.length);
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