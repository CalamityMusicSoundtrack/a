function openFullscreen(elem) { if (elem.requestFullscreen) { elem.requestFullscreen() } else if (elem.mozRequestFullScreen) { elem.mozRequestFullScreen() } else if (elem.webkitRequestFullscreen) { elem.webkitRequestFullscreen() } else if (elem.msRequestFullscreen) { elem.msRequestFullscreen() } }

function openFullsceenMobile() { if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { var elem = document.getElementById("myVideoDiv"); if (elem.requestFullscreen) { elem.requestFullscreen() } else if (elem.mozRequestFullScreen) { elem.mozRequestFullScreen() } else if (elem.webkitRequestFullscreen) { elem.webkitRequestFullscreen() } else if (elem.msRequestFullscreen) { elem.msRequestFullscreen() } } else { return } }