//alert() メッセージを一方的にお知らせする、確認を押すまで、消えない
//prompt() 入力してもらったときの値をうける
//confirm() 確認と取り消しボタンが両方あり


const name = prompt("名前を入力してください");
alert(name+"様いらっしゃいませ");
const name1 = prompt("名前を入力してください", "あなたの名前は？");
//引数を二つ受けられる、２目の引数入れるとDefault設定可能
//キャンセル　＝ null 返す　
const isAdult = confirm("あなたは成人ですか？")
// 確認　＝　True、キャンセル　= False 返す

//alert, prompt, confirmは早く簡単に適応可能な長所あるが、 その反面の短所
/*
1. Scriptが一時停止になる
2. Styling 不可　→位置と模様設定不可
*/
