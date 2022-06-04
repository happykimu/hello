// String() 
// ()の中をStringへ変換
console.log(
String(5),
String(false),
String(true),
String(null),
String(undefined),
)

//5 false true null undefined
//console.log(  ,   ,  ,   ,  ,   )でコード入力し、連続出力も可能

//2022.5.2
//文字数を取得する
//str.length()
const str = 'こんにちは';
console.log(str.length); //5


//文字列から一文字を取得する
//str.charAt()
const str1 = 'こんにちは'
console.log(str.charAt(2)); //に

//特定の文字列を含むか調べる
//str.includes()
