let butFlg = false;
//ページ読み込み時の画像の状態
let nowDisplay = image.style.display;

imageBut.addEventListener('click' , () => {
    let image = document.getElementById('image');
    let butText = document.getElementById('imageBut');
    
    console.log(butText);
    
    //console.log(image);
    if(butFlg === false){
        butFlg = true;
        butText.innerHTML = '画像非表示';
        image.style.display = 'none';
        // image.innerHTML = '<img src = \"images/aoikiImage\" alt=\"\" width=\"40%\" height=\"40%\">';
    
    }else{
        butFlg = false;
        butText.innerHTML = '画像表示';
        image.style.display = nowDisplay;
        // image.innerHTML = '';
    }

});