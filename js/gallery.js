var totalPics = 0,
    currentPic = 0;
var gallery = new Array();

document.getElementById('next-button').onclick = nextPicture;
document.getElementById('previous-button').onclick = previousPicture;

function startGallery() {
    var imgTagArr = document.getElementsByTagName('img');
    for (let i = 0; i < imgTagArr.length; i++) {
        gallery[i] = imgTagArr[i];
        if (totalPics == 0) {
            imgTagArr[i].style.display = 'block';
        } else {
            imgTagArr[i].style.display = 'none';
        };
        totalPics++;
    };

    setInterval(nextPicture, 5000);
};

function nextPicture() {
    gallery[currentPic].style.display = 'none';
    currentPic++;
    if (currentPic >= totalPics) currentPic = 0;
    gallery[currentPic].style.display = 'block';
};

function previousPicture() {
    gallery[currentPic].style.display = 'none';
    currentPic--;
    if (currentPic <= -1) {
        currentPic = gallery.length - 1; 
    };
    gallery[currentPic].style.display = 'block';
};