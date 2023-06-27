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
        }, 10);

    } else {
        butFlg = false;
        butText.innerHTML = '画面表示';
        setTimeout(function () {
            $("#image").stop().animate({ opacity: '0' }, 120);

        }, 10);
        setTimeout(function () {
            image.innerHTML = '';
        }, 130);
    }

});

window.addEventListener("scroll", function () {
    let window_scrollY = window.pageYOffset;
    console.log(window_scrollY);

    if (window_scrollY > 200) {
        $('html').css({ backgroundColor: '#a2b6c8', transition: "1.9s" });
        $('table').css({ backgroundColor: '#6e87a1', transition: "1.3s" });
    } else {
        $('html').css({ backgroundColor: '#ffffff', transition: "1.9s" });
        $('table').css({ backgroundColor: '#f0ffff', transition: "1.3s" });
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

