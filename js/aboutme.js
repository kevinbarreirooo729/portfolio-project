var kevinPic01 = true, kevinPic02 = false;

/**
 * changeImage() switches the image of Kevin Barreiro to a different image
 * onmouseover and onmouseout within ../html/aboutme.html 
 */
function changeImage() {
    if (kevinPic01) {
        kevinPic01 = false;
        kevinPic02 = true;
        // Display 2nd image of Kevin.
        document.getElementsByTagName('img')[0].src = '../images/pic-of-kevin-02.png';
    } else {
        kevinPic01 = true;
        kevinPic02 = false;
        // Display 1st image of Kevin. 
        document.getElementsByTagName('img')[0].src = '../images/pic-of-kevin-01.png';
    };
};