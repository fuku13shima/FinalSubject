
(()=>{
            // ゼロ埋めして2桁の数値にする
            const zero = n => (n < 10 ) ? "0" + n.toString() : n.toString();

            // 日付の文字列化
            const youbi = ["日","月","火","水","木","金","土"];
            const getDateString = date =>
                `${ date.getFullYear() }年 ${ zero(date.getMonth() + 1) }月  ${ zero(date.getDate()) }日 ${ youbi[date.getDay()] }曜日`;

            // 時間の文字列化
            const getHourString = date =>
                `${ zero(date.getHours()) }: ${ zero(date.getMinutes()) }: ${ zero(date.getSeconds()) }`;

            // DOMの構築を待つ
            window.addEventListener('DOMContentLoaded',()=> {
                // 日時を表示するDOM要素を取得
                const dateDiv = document.getElementById("date");
                const clockDiv = document.getElementById("clock");

                // 現在の日
                let nowDate = null;

                // 1秒周期のタイマーセット
                setInterval( ()=>{
                    // 現在の日時を取得
                    const now = new Date();
                    // 日付が変わったら日付を再表示
                    if( nowDate !== now.getDate() ) {
                        nowDate = now.getDate();
                        dateDiv.innerText = getDateString(now);
                    }

                    // 時間を再表示
                    clockDiv.innerText = getHourString(now);
                },1000);
            });
})();












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


/*背景色変更*/
document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('.color-button');
    button.addEventListener('click', changeBackgroundColor);
});

function changeBackgroundColor() {
    var colors = ['red', 'blue', 'green', 'yellow', 'orange', 'black'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
