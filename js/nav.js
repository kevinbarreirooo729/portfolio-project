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
        navList += `<li><a href="${nav[0][0]}">Gallery</a></li>`;
        navList += `<li><a href="${nav[0][1]}">About Me</a></li>`;
        navList += `<li><a href="${nav[0][2]}">Contact Me</a></li>`;
        navList += `<li><a href="${nav[0][3]}">My Page</a></li>`;
        navList += '</ul>';
    } else if (galleryPage) {
        // Add each path to navList as an unordered list.
        navList += `<li><a href="${nav[1][0]}">Home</a></li>`;
        navList += `<li><a href="${nav[1][1]}">About Me</a></li>`;
        navList += `<li><a href="${nav[1][2]}">Contact Me</a></li>`;
        navList += `<li><a href="${nav[1][3]}">My Page</a></li>`;
        navList += '</ul>';
    } else if (aboutmePage) {
        // Add each path to navList as an unordered list.
        navList += `<li><a href="${nav[2][0]}">Home</a></li>`;
        navList += `<li><a href="${nav[2][1]}">Gallery</a></li>`;
        navList += `<li><a href="${nav[2][2]}">Contact Me</a></li>`;
        navList += `<li><a href="${nav[2][3]}">My Page</a></li>`;
        navList += '</ul>';
    } else if (contactmePage) {
        // Add each path to navList as an unordered list.
        navList += `<li><a href="${nav[3][0]}">Home</a></li>`;
        navList += `<li><a href="${nav[3][1]}">Gallery</a></li>`;
        navList += `<li><a href="${nav[3][2]}">About Me</a></li>`;
        navList += `<li><a href="${nav[3][3]}">My Page</a></li>`;
        navList += '</ul>';
    } else if (mypagePage) {
        // Add each path to navList as an unordered list.
        navList += `<li><a href="${nav[4][0]}">Home</a></li>`;
        navList += `<li><a href="${nav[4][1]}">Gallery</a></li>`;
        navList += `<li><a href="${nav[4][2]}">About Me</a></li>`;
        navList += `<li><a href="${nav[4][3]}">Contact Me</a></li>`;
        navList += '</ul>';
    };

    // Add the paths to the pages nav. 
    document.getElementById('nav').innerHTML = navList;
};