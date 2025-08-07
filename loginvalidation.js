const login_form = document.querySelector("form[name='login']");

const email_input = document.querySelector("#email-input");
const password_input = document.querySelector("#password-input");
const INVALID_FIELD_CSS_STYLE = 'invalid';

const email_error_message = document.querySelector("#email-error-message");
const password_error_message = document.querySelector("#password-error-message");

let is_email_valid = null;
let is_password_valid = null;

login_form.addEventListener('submit', function (event) {
    event.preventDefault();

    is_email_valid = validate_email(email_input.value);
    is_password_valid = validate_password(password_input.value);

    if ( !is_email_valid[0] ) {
        email_error_message.innerHTML = is_email_valid[1];
    }
    else if ( !is_password_valid[0] ) {
        password_error_message.innerHTML = is_password_valid[1];
    }
    else {
        alert('Submitted successfully');
        login_form.submit();
    }
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

function validate_email(email) {
    if(email.includes("@")) return [true,''];
    else return [false, "Email must include the '@' symbol"];
}

function validate_password(pwd) {
    if(pwd.length < 8) return [false, "Password should be at least 8 characters"];
    else return [true,''];
}