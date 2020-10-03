var username, cookieArr;

var cookieExpiration = new Date().toUTCString + 60 * 60000;
// 60 is the amount of minutes in 1 hour. 
// 60000 is the amount of milleseconds in 1 minute. 
// Thus, cookiesExpiration is 1 hour into the future. 

if (document.cookie.split('; ').length > 0) {
    // This portion runs if the user has visited the page. 

    // Gets the username from the username cookie. 
    username = document.cookie.split('; ').find(element => element.startsWith('username')).split('=')[1];
    // Gets the visit count from the visitCount cookie. 
    var visitCountCookie = document.cookie.split('; ').find(element => element.startsWith('visitCount')).split('=')[1];
    // Display a welcome message and the number of visits in index.html. 
    document.getElementById('welcome-message').innerHTML += 'Greetings, ' + username +
        '!<br>This is visit number ' + visitCount + '.';
} else {
    // This portion runs if the user has never visited the page. 

    // Prompts the user for their name.
    username = prompt('Enter your name.');
    // Creates a username cookie. 
    document.cookie = 'username=' + username + "; expires=" + cookieExpiration;
    // Creates a visit count cookie. 
    document.cookie = 'visitCount=1;' + " expires=" + cookieExpiration;
    // Display a welcome message in index.html. 
    document.getElementById('welcome-message').innerHTML += 'Greetings, ' + username + '!';
}

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