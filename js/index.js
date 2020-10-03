var username, cookieArr, usernameCookie, visitCountCookie;
var today = new Date();
var cookieExpiration = today.toUTCString() + 4320 * 60000;
// 4320 is the amount of minutes in 3 days. 
// 60000 is the amount of milleseconds in 1 minute. 
// Thus, cookiesExpiration is 3 days into the future. 

// UPLOAD THIS PAGE TO GIT HUB PAGES TO TEST THE COOKIES!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

alert(document.cookie);

if (document.cookie.split(';').some((item) => item.trim().startsWith('username='))) {
    // This portion runs if the username cookie exists. 
   
    // Gets the stored username cookie. 
    document.cookie.split(';').some(function (item) {
        if (item.trim().startsWith('username=')) {
            usernameCookie = item.trim();
        };
    });
    // Gets the username from the username cookie. 
    username = usernameCookie.substring(9); 
    // Gets the stored visitCount cookie. 
    document.cookie.split(';').some(function (item) {
        if (item.trim().startsWith('visitCount=')) {
            visitCountCookie = item.trim();
        };
    });
    // Gets the visit count from the visitCount cookie. 
    visitCount = visitCountCookie.substring(11);
    // Display a welcome message and the number of visits in index.html. 
    document.getElementById('welcome-message').innerHTML += 'Greetings, ' + username +
    '!<br>This is visit number ' + visitCount + '.';
} else {
    // This portion runs if the username cookie does not exist. 

    // Prompts the user for their name.
    username = prompt('Enter your name.');
    // Creates a username cookie. 
    document.cookie = 'username=' + username + "; expires=" + cookieExpiration + 
    '; SameSite=Lax; Secure';
    alert(document.cookie);
    // Creates a visit count cookie. 
    document.cookie = 'visitCount=1;'+ " expires=" + cookieExpiration + 
    '; SameSite=Lax; Secure';
    alert(document.cookie);
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