/**
 * isValidForm() checks if a form is valid. Returns true if 
 * the form is valid, otherwise it returns false. 
 */

function isValidForm() {
    var formElements = document.getElementById('contactMeForm').elements;

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
        
        // Build an error message. 
        let errorMsg = '<ul><li>Please enter information for the following fields:</li>';
        for (let e = 0; e < invalidFormElements.length; e++) {
            errorMsg += '<li>' + invalidFormElements[e].name + '</li>';
        };
        errorMsg += '</ul>';

        // Write the error message to contactme.html 
        document.getElementById('formErrorMsg').innerHTML = errorMsg;

        return false;
    } else {
        // It is a valid form. 
        return true;
    };

// Check for invalid email format. 
    var emailElement = document.getElementById('eMail');
};