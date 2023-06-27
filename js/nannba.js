document.addEventListener('DOMContentLoaded', function() {
    var image = document.getElementById('image');
    var toggleButton = document.getElementById('toggle-button');

    toggleButton.addEventListener('click', function() {
        if (image.style.display === 'none') {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
});