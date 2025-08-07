const signup_form = document.querySelector("form[name='signup']");

const name_input = document.querySelector("#name-input");
const date_input = document.querySelector("#date-input");
const email_input = document.querySelector("#email-input");
const password_input = document.querySelector("#password-input");

const name_error_message = document.querySelector("#name-error-message");
const date_error_message = document.querySelector("#date-error-message");
const email_error_message = document.querySelector("#email-error-message");
const password_error_message = document.querySelector("#password-error-message");

const INVALID_FIELD_CSS_STYLE = 'invalid';

let is_name_valid = null;
let is_date_valid = null;
let is_email_valid = null;
let is_password_valid = null;

signup_form.addEventListener("submit", function (event) {
    event.preventDefault();

    is_name_valid = validate_name(name_input.value);
    is_email_valid = validate_email(email_input.value);
    is_password_valid = validate_password(password_input.value);

    if (is_name_valid[0] && is_email_valid[0] && is_password_valid[0]) {
        alert('Submitted Successfully!');
        signup_form.submit();
    }
});

name_input.addEventListener("change", function (event) {
    is_name_valid = validate_name(name_input.value);

    if(is_name_valid[0]) {
        name_input.classList.remove(INVALID_FIELD_CSS_STYLE);
    } else {
        if( !name_input.classList.contains(INVALID_FIELD_CSS_STYLE) ) {
            name_input.classList.add(INVALID_FIELD_CSS_STYLE);
        }
    }
    name_error_message.innerHTML = is_name_valid[1];
});

email_input.addEventListener("change", function () {
    is_email_valid = validate_email(email_input.value);

    if (is_email_valid[0]) {
        email_input.classList.remove(INVALID_FIELD_CSS_STYLE);
    } else {
        if( !email_input.classList.contains(INVALID_FIELD_CSS_STYLE)) {
            email_input.classList.add(INVALID_FIELD_CSS_STYLE);
        }
    }
    email_error_message.innerHTML = is_email_valid[1];
});

password_input.addEventListener("change", function () {
    is_password_valid = validate_password(password_input.value);

    if (is_password_valid[0]) {
        password_input.classList.remove(INVALID_FIELD_CSS_STYLE);
    } else {
        if( !password_input.classList.contains(INVALID_FIELD_CSS_STYLE)) {
            password_input.classList.add(INVALID_FIELD_CSS_STYLE);
        }
    }
    password_error_message.innerHTML = is_password_valid[1];
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