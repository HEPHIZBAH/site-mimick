var i = 0;
var images = [];
var time = 2000;

images[0] = "davisuko-5E5N49RWtbA-unsplash.jpg";
images[1] = "playing-video-games-streaming.webp";
images[2] = "davisuko-5E5N49RWtbA-unsplash.jpg";
images[3] = "istockphoto-519955474-612x612.jpg";
images[4] = "istockphoto-1094254372-612x612.jpg";
images[5] = "istockphoto-1336308814-612x612.jpg";


function changeImg() {
    document.slideImg.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);

}
   window.onload = changeImg;