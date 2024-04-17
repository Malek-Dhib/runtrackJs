var konamiCode = ['ArrowDown'];

var konamiIndex = 0;

document.addEventListener('keydown', function(event) {
    if (event.code === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            document.body.classList.add('konami');
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});
