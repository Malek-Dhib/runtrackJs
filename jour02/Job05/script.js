window.addEventListener("scroll", function() {
    var scrollPercent = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
    document.getElementById("footer").style.backgroundColor = "rgb(" + (255 - scrollPercent) + ", " + scrollPercent + ", 100)";
});
