//反復
//同じ作業を繰り返し実行する
// forをよく使う
//forは、；で区分して、３つに分けて確認できる
/*
for (let i = 0; i < 10; i++){   //初期値0、条件10までtrueだったらずっと実行、falseになると止まる、コード実行後の作業
    反復するコード
}
*/

for (let i =0; i < 10; i++){
    console.log(i+1);
}

//while反復

let i = 0;
while(i<10){
    console.log(i);
    i++;
}
//i++;で　1ずつ増加作業をしないと、無限ループになる
//iが10になると、反復文から脱出


//do.... while 反復
let j = 0;
do{
    console.log(j);
    j++;
}while(j<10)

//反復文から脱出する　break / continue 

// while(true){
//     let answer = confirm('またしますか？');
//     if(!answer){
//         break;
//     }
// }
//while(true)だけでは無限ループになるので、注意
//OKを押すと、trueで、ずっと反復
//キャンセルを押すと、falseで、break　止まる。

//continue
for(let i =0; i < 10; i++){
    if(i%2){
        continue;
    }
    console.log(i)
}