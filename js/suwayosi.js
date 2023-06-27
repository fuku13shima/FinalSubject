let butFlg = false;

imageBut.addEventListener('click' , () => {
    let image = document.getElementById('image');
    let butText = document.getElementById('imageBut');
    console.log(butText);
    
    //console.log(image);
    if(butFlg === false){
        butFlg = true;
        butText.innerHTML = '画像非表示';
        image.innerHTML = '<img src = \"images/yoshiki.jpg\" alt=\"\" width=\"40%\" height=\"40%\">';
    
    }else{
        butFlg = false;
        butText.innerHTML = '画像表示';
        image.innerHTML = '';
    }

});



jQuery(function ($) {
    var fadeIn = $('.fade-in');
    $(window).load(function () {
        $(fadeIn).each(function () {
            var offset = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > offset - windowHeight + 50) {
                $(this).addClass("scroll-in");
            }
        });
    });
});
jQuery(function ($) {
    var fadeIn = $('.fade-in');
    $(window).scroll(function () {
        $(fadeIn).each(function () {
            var offset = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > offset - windowHeight + 50) {
                $(this).addClass("scroll-in");
            }
        });
    });
});

window.onload = function () {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
}
