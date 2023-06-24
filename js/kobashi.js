let butFlg = false;

imageBut.addEventListener('click', () => {
    let image = document.getElementById('image');
    let butText = document.getElementById('imageBut');
    console.log(butText);

    //console.log(image);
    if (butFlg === false) {
        butFlg = true;
        butText.innerHTML = '画面非表示';
        image.innerHTML = '<img src = "images/kobashi_smill.jpg" alt="" width="40%" height="40%" opacity="0%">';
        $('#image').css({ opacity: '0' });
        setTimeout(function () {
            $("#image").stop().animate({ opacity: '1' }, 120);

        },10);

    } else {
        butFlg = false;
        butText.innerHTML = '画面表示';
        setTimeout(function () {
            $("#image").stop().animate({ opacity: '0' }, 120);

        }, 10);
        setTimeout(function () {
            image.innerHTML = '';
        },130);
    }

});



