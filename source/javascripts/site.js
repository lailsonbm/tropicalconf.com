var currentTime = new Date().getHours();
if (6 <= currentTime && currentTime < 20) {
    if (document.body) {
        document.body.background-color = "$white";
    }
}
else {
    if (document.body) {
        document.body.background = "$dark-blue";
    }
}
