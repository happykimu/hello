// + - * / %　**
// % 余りもよく使われる
/*
例)奇数:X%2=1
偶数:Y%2=0
例)どんな値が入っても、5を超えてはいけない
X%5  = 0~4だけ返す
*/

let num = 10;
num += 5
//num = num + 5 と同じ
console.log(num);

let numb = 10;
numb++; 
//11、+1増加させる
console.log(numb);

let numbe = 20;
let number = ++numbe;
console.log(number);
//21、numbe＋1増加させた数字をnumberに代入

/*比較演算
< >　≦　≧　＝　≠
< > <= >= == !=
*/

console.log(20>5); //true
console.log(20==10); //false
console.log(20!=10); //true

const a = 1;
const b = "1";
console.log(a==b); //true、同等演算、string 1 と　number 1を　同じものとして認識、バグに繋がる恐れがあるので、避けた方がええ
console.log(a===b); //false、一次演算、string 1 と　number 1 は　違うものとして認識、バグを避ける為、こちらを使った方がええ




