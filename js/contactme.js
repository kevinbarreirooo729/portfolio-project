var isValid = true;
var errorMsg = '<h3 id="invalid-form-h3">Please enter valid information for the following field(s):</h3><ul id="invalid-form-ul">';
var formElements = document.getElementById('contactMeForm').elements;

/**
 * isValidForm() checks if a form is valid. Returns true if 
 * the form is valid, otherwise it returns false. 
 */

function isValidForm() {
    errorMsg = '<h3 id="invalid-form-h3">Please enter valid information for the following field(s):</h3><ul id="invalid-form-ul">';
    hasEmptyField();
    isValidEmail();
    isValidPassword();

    // Write the error message to contactme.html 
    errorMsg += '</ul>';
    document.getElementById('formErrorMsg').innerHTML = errorMsg;


    // Scroll the page to the top for Safari. 
    document.body.scrollTop = 0;
    // Scroll the page to the top for IE, Firefox, Chrome, and Opera. 
    document.documentElement.scrollTop = 0;

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
            if (invalidFormElements[e].name.toLowerCase() == 'password' ||
                invalidFormElements[e].name.toLowerCase() == 'email') continue;
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

    var passwordErrorMsg = '<h4>Invalid Password</h4><ul id="invalid-form-pw">';
    if (password.length < 6) {
        passwordErrorMsg += '<li>Must be at least 6 characters long.</li>';
        isValid = false;
    };
    if (!(hasUpperCase(password) && hasLowerCase(password))) {
        passwordErrorMsg += '<li>Must contain at least 1 lower case letter ' +
            'and 1 upper case letter.</li>';
        isValid = false;
    };
    if (!hasTwoNumbers(password)) {
        passwordErrorMsg += '<li>Must contain at least 2 numbers.</li>';
        isValid = false;
    };
    if (!hasSpecialChar(password)) {
        passwordErrorMsg += '<li>Must contain at least 1 special character ' +
            '(one of !@#$%^&*?_~,./<>?-=_+()[]{};:`|\"\').</li>';
        isValid = false;
    };

    // Display password strength in contactme.html 
    if (password.length < 6) {
        document.getElementById('pwStrengthMeter').innerHTML = 'Password Strength: Weak';
    } else if (password.length >= 6 && password.length <= 10 && hasTwoNumbers(password) && hasUpperCase(password) &&
        hasLowerCase(password) && hasSpecialChar(password)) {
        document.getElementById('pwStrengthMeter').innerHTML = 'Password Strength: Medium';
    } else if (password.length >= 11 && hasTwoNumbers(password) && hasUpperCase(password) &&
        hasLowerCase(password) && hasSpecialChar(password)) {
        document.getElementById('pwStrengthMeter').innerHTML = 'Password Strength: Strong';
    } else {
        document.getElementById('pwStrengthMeter').innerHTML = 'Password Strength: Medium';
    };

    passwordErrorMsg += '</ul>';
    errorMsg += passwordErrorMsg;
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

function hasSpecialChar(str) {
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
 * updateCommentCount() updates count that tracks the number of characters in
 * a textarea. 
 */

function updateCommentCount() {
    document.getElementById('commentCount').value = document.getElementById('comments').value.length;
};

/**
 * jQuery code. 
 */

var $j = jQuery.noConflict();

$j('document').ready(function () {
    $j('#date').datepicker();
});