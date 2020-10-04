var errorMsg = '<h3>Please enter valid information for the following fields:</h3><ul>';
var isValid = true;
var formElements = document.getElementById('contactMeForm').elements;

/**
 * isValidForm() checks if a form is valid. Returns true if 
 * the form is valid, otherwise it returns false. 
 */

function isValidForm() {
    hasEmptyField();
    isValidEmail();
    isValidPassword();

    // Write the error message to contactme.html 
    errorMsg += '</ul>';
    document.getElementById('formErrorMsg').innerHTML = errorMsg;

    return isValid;
};

/**
 * emptyFields() checks for empty form elements. 
 */

function hasEmptyField() {
    // Check for empty fields. 
    var invalidFormElements = new Array();

    // Iterates through each form element. 
    for (let e = 0; e < formElements.length; e++) {
        // Tests for invalid form elements.
        if (formElements[e].value.length < 1) {
            let invalidElement = document.getElementById(formElements[e].name);
            invalidFormElements.push(invalidElement);
        };
    };

    if (invalidFormElements.length > 0) {
        // It is an invalid form. 

        // Append to the error message. 
        for (let e = 0; e < invalidFormElements.length; e++) {
            errorMsg += '<li>' + invalidFormElements[e].name + '</li>';
        };

        isValid = false;
    };
};

/**
 * isValidEmail() checks is the email is valid. 
 */

function isValidEmail() {
    // Check for invalid email format. 
    var emailRegEx = /\w+@\w+[.]\w+/;
    var emailElement = document.getElementById('eMail');
    if (!emailRegEx.test(emailElement.value)) {
        isValid = false;
        // Append to the error message. 
        errorMsg += '<li>' + emailElement.name + '</li>';
    };
};

/**
 * isValidPassword()
 */

function isValidPassword() {
    // Check for a valid password. 
    var password = document.getElementById('password').value;

    var passwordErrorMsg = '<ul>';
    if (password.length < 6) {
        passworErrorMsg += '<li>Must be at least 6 characters long.</li>';
        isValid = false;
    };
    if (!(hasUpperCase(password) || hasLowerCase(password))) {
        passwordErrorMsg += '<li>Must contain at least 1 lower case letter' +
            'and 1 upper case letter.</li>';
        isValid = false;
    };
    if (!hasTwoNumbers(password)) {
        passwordErrorMsg += '<li>Must contain at least 2 numbers.</li>';
        isValid = false;
    };
    if (!hasSpecialCharacters(password)) {
        passwordErrorMsg += '<li>Must contain at least 1 special character' +
            '(one of !@#$%^&*?_~,./<>?-=_+()[]{};:`|\"\').</li>';
        isValid = false;
    };
};

/**
 * jQuery code. 
 */

var $j = jQuery.noConflict();

$j('document').ready(function () {
    $j('#datePicker').datepicker();
});