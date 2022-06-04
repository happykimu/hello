//2022.5.2
//エラーメッセージの出力
//console.error('')
//
console.error('wrong');

//表形式でデータを出力する
//console.table();
const user = {
    name: 'kim',
    age: 22, 
    }
    console.table(user);

//メッセージを出力する
//console.info();
const user1 = {
name1: 'kim',
age: 23,
}
console.info(user1);

//警告メッセージ
//console.warn()
const user2 = {
name3: 'kim',
age: 200,
}
console.warn(user, '確認してください。');

//処理時間の計測
//console.time();
//何かの処理をする
//console.timeEnd();
console.time();
console.log('hello');
console.timeEnd();

//呼び出した回数を記録する
//console.count()
for(let i = 0; i < 5; i++){
    console.count('呼び出した回数');
}

