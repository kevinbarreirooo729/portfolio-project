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

var navList = '<ul>';
for (let n = 0; n < n.length; n++) {
    (n == 0) ? setIndexNav(nav[n], pageId) : '';
    (n == 1) ? setGalleryNav(nav[n], pageId) : '';
    (n == 2) ? setAboutMeNav(nav[n], pageId) : '';
    (n == 3) ? setContactMeNav(nav[n], pageId) : '';
    (n == 4) ? setMyPageNav(nav[n], pageId) : '';
};

function setIndexNav(navArr) {
    let navList = '<ul>';
    for (let l = 0; l < navArr.length; l++) {
        navList += '<li>' + navArr[l] + '</li>';
    };
    navList += '</ul>';

    document.getElementById('nav').innerHTML = navList;
};