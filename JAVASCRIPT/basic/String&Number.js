/* String 文字方

const name1 = "mami";
const name2 = 'mami';
const name3 = `mami`;

*/
const name = "mami";
const name1 = "mami";
const name2 = 'mami';
const name3 = `mami`;

const message = "I'm a boy"
const message2 = 'I\'m a boy'
// 逆スラッシュは　option + ¥
// single quotationで文字列を定義するとき、文字列中のsingle quotationの表記方法に注意　

console.log(name1);
console.log(name2);
console.log(name3);
console.log(message);
console.log(message2);

const message3 = `My name is ${name}`;
console.log(message3);

const message4 = `I am ${30+2} years old`;
console.log(message4);

const message5 = "I am ${30+2} years old";
console.log(message5);
//double quotationを使ったら、I am ${30+2} years old と出力されるので、要注意

const a = "私は";
const b = 30;
const c = "歳です。";
console.log(a + b + c);
console.log(a+b+"歳です。");//typeofで、b=30がnumberではなく、stringへ変換される

/* Number 数字型

*/

const age = 30;
const money = 300.5;

console.log(1+5);
console.log(10-7);
console.log(3*9);
console.log(9/3);
console.log(7%4); //割ってから余り

const z = 2/0;
console.log(z); //数字をゼロで割ったら、無限大(Infinity)表示

const y = name/3;
console.log(y); //文字列を数字で割ったら、Nan、 Not a number


