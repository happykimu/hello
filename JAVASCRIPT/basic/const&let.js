const HELLO = 1.23;
console.log(HELLO);

let LOVE = 3.45;
console.log(LOVE);

LOVE = 4.56;
console.log(LOVE);

/*
constは絶対変わらない定数
letは、再定義して、変えれる変数
*/
/*
１。変数は文字、数字と＄、_のみ使用可能
例) const MY_AGE = "..."
let _ = 1;
let $ = 3;
２。数字は第一文字として入れられない。
例)　1stlove = 'mimi'; (X)
３。予約語は使えない。
例)　let let = 100; (X)
４。できる限り、constの定数は大文字で
５。変数名は見て、わかりやすく
*/

let _ = 3;
let $ = 4;
console.log(_);
console.log($);