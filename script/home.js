function stackToTop(imgid) {
    var img = document.getElementById(imgid).style;
    img.zIndex = "10";
    img.transform = "scale(0.95, 0.95)";
}

function stackToBottom(imgid) {
    var img = document.getElementById(imgid).style;
    img.zIndex = "1";
    img.transform = "scale(0.85, 0.0)";
}