document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('.color-button');
    button.addEventListener('click', changeBackgroundColor);
});

function changeBackgroundColor() {
    var colors = ['red', 'blue', 'green', 'yellow', 'orange', 'black'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}