//function　関数
//サービスを作ってみると、似たような動作が生じる。POP　UPを表示させたり、 決済を実行するなど。
//このような動作をよく使ったり、いろんなとこで使うときは、一つにまとめて、リサイクルした方が効率いい。
//重複するコードも減り、その分維持、保守の手間が省ける
//関数はそれを可能にする


//例)媒介関数なし
function showError(){
    alert('エラーが発生しました。もう一度実行してください');
}

showError();

//例)媒介関数あり
function sayHello(name){ //ここではnameが媒介変数
    const msg = `Hello, ${name}`; // macbook の場合、' ではなく、` で囲まないといけない、キーボードPの右
    console.log(msg);
}

sayHello('mike');

//媒介変数応用

function sayHello1(name1){
    let msg1 = `hello`; //ここで使われた、msg1 は、関数の外では使えない。関数内でしか使えない、地域変数、もし、関数の外で使いたい場合は、外へ出さないといけない
    if(name1){
        msg1 += name1; 
    }
    console.log(msg1);
}

sayHello1();

/*
関数まとめ　22.4.20
1.一つの関数に、一つの作業をさせた方がいい
2.変数と同様、読みやすくわかりやすく、どういう動作なのか、見てわかるようにネーミング
例)showError エラーを見せる
getName 名前を持ってくる
createUserDate　ユーザーデーターの生成
CheckLogin ログイン有無確認
*/