var username, cookieArr, usernameCookie, visitCountCookie;

if (document.cookie.split(';').some((item) => item.trim().startsWith('username='))) {
    // This portion runs if the username cookie exists. 

    // Gets all cookies.
    cookiesArr = document.cookie.split(';');
    // Gets the stored username cookie. 
    usernameCookie = cookiesArr.find('username=');
    // Gets the username from the username cookie. 
    username = usernameCookie.substring(9);
    // Gets the stored visitCount cookie. 
    visitCountCookie = cookiesArr.find('visitCount=');
    // Gets the visit count from the visitCount cookie. 
    visitCount = visitCountCookie.substring(11);
    // Display a welcome message and the number of visits in index.html. 
    document.getElementById('welcome-message').innerHTML += 'Greetings, ' + username +
    '!<br>This is your ' + visitCount + ' visit.';
} else {
    // This portion runs if the username cookie does not exist. 

    // Prompts the user for their name.
    username = prompt('Enter your name.');
    // Creates a username cookie. 
    document.cookie = 'username=' + username;
    // Creates a visit count cookie. 
    document.cookie = 'visitCount=1';
    // Display a welcome message in index.html. 
    document.getElementById('welcome-message').innerHTML += 'Greetings, ' + username +
    '!';
};

// Algorithm Pseudocode - 
// if its the users first time on the home page
    // prompt for username
    // display "Greetings, " + username
    // create a cookie with "username=" + username
// else
    // do not prompt for username
    // obtain the username from the stored cookie
    // display "Greetings, " + username + number of times this
        // this user has visited the home page. 