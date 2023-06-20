let butFlg = false;

imageBut.addEventListener('click' , () => {
    let image = document.getElementById('image');
    //console.log(image);
    if(butFlg === false){
        butFlg = true;
        image.innerHTML = "<img src = \"images/aoikiImage\" alt=\"\" width=\"50%\" height=\"50%\">";
    
    }else{
        butFlg = false;
        image.innerHTML = "";
    }

});