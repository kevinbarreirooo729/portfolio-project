// Typed.js Repo:
// https://github.com/mattboldt/typed.js

var isDoneTyping = false;

window.onload = function () {
    setNav();

    var typeWriter01 = new Typed('#verse-typed', {
        stringsElement: '#verse',
        typeSpeed: 50,
        startDelay: 50,
        showCursor: false
    });
};