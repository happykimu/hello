//Number() ()を数字に変える
console.log(Number("1234"));
//1234
//もし、文字列が含まれてたら、NaNが出る
console.log(Number("1234abcde"));1

//TrueとFalseは Numberで変換すると、1と0になる
console.log(Number(true));
console.log(Number(false));

console.log(Number(null)); //0になる、覚えるしかない
console.log(Number(undefined)); //NaNになる、覚えるしかない


