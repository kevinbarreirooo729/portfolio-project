var username = prompt("Enter your name.");

// Display a welcome message in index.html. 
document.getElementById('welcome-message').innerHTML += 'Greetings, ' + username;

// Create a cookie with the username. 
document.cookie = 'username=' + username;