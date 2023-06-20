












/*おみくじ機能*/
fortuneBut.addEventListener('click' , () => {
    var random = Math.floor(Math.random() * 10);
    console.log(random);

    let fortuneBut =document.getElementById('fortuneBut');
    console.log(fortuneBut);
    let result =document.getElementById('fortuneResult');
    console.log(result);
    
    if(random < 2){
        result.innerHTML = '<h2>凶</h2><h5>ざんねん！</br>なんばぐみに入って運気を上げよう！</h5>';
        console.log('凶');

    }else if(random < 6){
        result.innerHTML = '<h2>中吉</h2><h5>そこそこ！</br>なんばぐみに入ったほうがいいよ！</h5>';
        console.log('中吉');

    }else if(random < 9){
        result.innerHTML = '<h2>吉</h2><h5>まずまず！</br>なんばぐみに入ればかんぺきかも！？</h5>';
        console.log('吉');

    }else{
        result.innerHTML = '<h2>大吉</h2><h5>おめでとう！</br>君にはもうなんばぐみは必要ないよ！</h5>';
        console.log('大吉');
    }

    fortuneBut.style.display = 'none';
});