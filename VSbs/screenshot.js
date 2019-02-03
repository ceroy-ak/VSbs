function setScreenshotUrl(url) {
    document.getElementById('anchor').href = url;
    document.getElementById('target').src = url;
    document.getElementById('target').click();
    window.close();
}
