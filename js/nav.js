var nav = [
    ['../html/gallery.html', '../html/aboutme.html',
        '../html/contactme.html', '../html/mypage.html'
    ], // index.html nav paths.

    ['../html/index.html', '../html/aboutme.html',
        '../html/contactme.html', '../html/mypage.html'
    ], // gallery.html nav paths.

    ['../html/index.html', '../html/gallery.html',
        '../html/contactme.html', '../html/mypage.html'
    ], // aboutme.html nav paths.

    ['../html/index.html', '../html/gallery.html',
        '../html/aboutme.html', '../html/mypage.html'
    ], // contactme.html nav paths.

    ['../html/index.html', '../html/gallery.html',
        '../html/aboutme.html', '../html/contactme.html'
    ] // mypage.html nav paths.
];

/**
 * Sets the navigation for each page, respectively. 
 */

function setNav() {
    let indexPage = document.getElementById('index');
    let galleryPage = document.getElementById('gallery');
    let aboutmePage = document.getElementById('aboutme');
    let contactmePage = document.getElementById('contactme');
    let mypagePage = document.getElementById('mypage');

    let navList = '<ul>';

    if (indexPage) {
        // Add each path to navList as an unordered list.
        navList += `<li><a href="${nav[0][0]}" target="_top">Gallery</a></li>`;
        navList += `<li><a href="${nav[0][1]}" target="_top">About Me</a></li>`;
        navList += `<li><a href="${nav[0][2]}" target="_top">Contact Me</a></li>`;
        navList += `<li><a href="${nav[0][3]}" target="_top">My Page</a></li>`;
        navList += '</ul>';
    } else if (galleryPage) {
        // Add each path to navList as an unordered list.
        navList += `<li><a href="${nav[1][0]}" target="_top">Home</a></li>`;
        navList += `<li><a href="${nav[1][1]}" target="_top">About Me</a></li>`;
        navList += `<li><a href="${nav[1][2]}" target="_top">Contact Me</a></li>`;
        navList += `<li><a href="${nav[1][3]}" target="_top">My Page</a></li>`;
        navList += '</ul>';
    } else if (aboutmePage) {
        // Add each path to navList as an unordered list.
        navList += `<li><a href="${nav[2][0]}" target="_top">Home</a></li>`;
        navList += `<li><a href="${nav[2][1]}" target="_top">Gallery</a></li>`;
        navList += `<li><a href="${nav[2][2]}" target="_top">Contact Me</a></li>`;
        navList += `<li><a href="${nav[2][3]}" target="_top">My Page</a></li>`;
        navList += '</ul>';
    } else if (contactmePage) {
        // Add each path to navList as an unordered list.
        navList += `<li><a href="${nav[3][0]}" target="_top">Home</a></li>`;
        navList += `<li><a href="${nav[3][1]}" target="_top">Gallery</a></li>`;
        navList += `<li><a href="${nav[3][2]}" target="_top">About Me</a></li>`;
        navList += `<li><a href="${nav[3][3]}" target="_top">My Page</a></li>`;
        navList += '</ul>';
    } else if (mypagePage) {
        // Add each path to navList as an unordered list.
        navList += `<li><a href="${nav[4][0]}" target="_top">Home</a></li>`;
        navList += `<li><a href="${nav[4][1]}" target="_top">Gallery</a></li>`;
        navList += `<li><a href="${nav[4][2]}" target="_top">About Me</a></li>`;
        navList += `<li><a href="${nav[4][3]}" target="_top">Contact Me</a></li>`;
        navList += '</ul>';
    };

    // Add the paths to the pages nav. 
    document.getElementById('nav').innerHTML = navList;
};

// COOKIE CODE
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