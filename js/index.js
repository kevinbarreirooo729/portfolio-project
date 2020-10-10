var username;

// Set cookie expiration time. 
var cookieExpiration = new Date().toUTCString + 60 * 60000;
// 60 is the amount of minutes in 1 hour. 
// 60000 is the amount of milleseconds in 1 minute. 
// Thus, cookiesExpiration is 1 hour into the future. 

// Test for the existence of cookies and proceed accordingly. 
if (document.cookie.split('; ')[0].split('=')[0] == 'username') {
    // This portion runs if the user has visited the page, i.e. cookies exist.  

    // Store the cookie in a key=value array for each cookie. 
    var cookies = document.cookie.split('; ');
    var usernameCookie = cookies[0].split('=');
    var visitCountCookie = cookies[1].split('=');

    // Get the username and visit count. 
    var cookieUsername, visitCount;
    cookieUsername = usernameCookie[1];
    visitCount = visitCountCookie[1];

    // Increase the visit count by 1. 
    visitCount = parseInt(visitCount);
    visitCount++;
    document.cookie = `visitCount=${visitCount}`;

    // Display the greetings and the visit count. 
    document.getElementById('welcome-message').innerHTML = `Greetings, ${cookieUsername}!<br>This is visit number ${visitCount}.`;
} else {
    // This portion runs if the user has never visited the page. i.e. cookies don't exist. 

    // Prompts the user for their name.
    username = prompt('Enter your name.');
    // Creates a username cookie. 
    document.cookie = `username=${username}`;
    // Creates a visit count cookie. 
    document.cookie = 'visitCount=1';
    // Page cookie
    document.cookie = "page=index"
    // Creates expires cookie
    document.cookie = `expires=${cookieExpiration}`;

    // Display a welcome message in index.html. 
    document.getElementById('welcome-message').innerHTML = `Greetings, ${username}!`;
};

/** Algorithm Pseudocode - 
    if its the users first time on the home page
        prompt for username
        display "Greetings, " + username
        create a cookie with "username=" + username
    else
        do not prompt for username
        obtain the username from the stored cookie
        display "Greetings, " + username + number of times this
        this user has visited the home page.
*/