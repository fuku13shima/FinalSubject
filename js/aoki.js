let butFlg = false;

imageBut.addEventListener('click' , () => {
    let image = document.getElementById('image');
    let butText = document.getElementById('imageBut');
    console.log(butText);
    
    //console.log(image);
    if(butFlg === false){
        butFlg = true;
        butText.innerHTML = '画像非表示';
        image.innerHTML = '<img src = \"images/aoikiImage\" alt=\"\" width=\"40%\" height=\"40%\">';
    
    }else{
        butFlg = false;
        butText.innerHTML = '画像表示';
        image.innerHTML = '';
    }

});