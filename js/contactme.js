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
    if (!(hasUpperCase(password) && hasLowerCase(password))) {
        passwordErrorMsg += '<li>Must contain at least 1 lower case letter' +
            'and 1 upper case letter.</li>';
        isValid = false;
    };
    if (!hasTwoNumbers(password)) {
        passwordErrorMsg += '<li>Must contain at least 2 numbers.</li>';
        isValid = false;
    };
    if (!hasSpecialCharacter(password)) {
        passwordErrorMsg += '<li>Must contain at least 1 special character' +
            '(one of !@#$%^&*?_~,./<>?-=_+()[]{};:`|\"\').</li>';
        isValid = false;
    };
};

/**
 * hasUpperCase() checks if a String contains at least one upper case character.
 * 
 * @param {String} str 
 */

function hasUpperCase(str) {
    let validStr = false;
    for (let c = 0; c < str.length; c++) {
        if (str[c] === str[c].toUpperCase()) {
            validStr = true;
        };
    };

    return validStr;
};

/**
 * hasLowerCase() checks if a String contains at least one upper case character.
 * 
 * @param {String} str 
 */

function hasLowerCase(str) {
    let validStr = false;
    for (let c = 0; c < str.length; c++) {
        if (str[c] === str[c].toLowerCase()) {
            validStr = true;
        };
    };

    return validStr;
};

/**
 * hasTwoNumbers() checks if a String has at least two numbers.
 * 
 * @param {String} str 
 */

function hasTwoNumbers(str) {
    let validStr;
    let numCount = 0;
    for (let c = 0; c < str.length; c++) {
        if (str[c] > '0' && str[c] < '9') numCount++;
    };

    (numCount >= 2) ? validStr = true: validStr = false;

    return validStr;
};

/**
 * hasSpecialCharacter() checks if a String contains a special character.
 * Special characters include: !@#$%^&*?_~,./<>?-=_+()[]{};:`|"'
 * 
 * @param {String} str 
 */

function hasSpecialCharacter(str) {
    let validStr = false;
    let specialChars = '!@#$%^&*?_~,./<>?-=_+()[]{};:`|\"\'';

    // Iterate through str
    for (let c = 0; c < str.length; c++) {
        // Iterate through specialChars
        for (let sc = 0; sc < specialChars.length; sc++) {
            if (str[c] == specialChars[sc]) isValid = true;
        };
    };

    return validStr;
};

/**
 * jQuery code. 
 */

var $j = jQuery.noConflict();

$j('document').ready(function () {
    $j('#datePicker').datepicker();
});