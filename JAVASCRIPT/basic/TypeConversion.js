const mathScore = Prompt("数学の点数は？");
const engScore = Prompt("英語の点数は？");
//promptで入力された値は、String
const result = (mathScore + engScore) /2;
//promptで入力された値は、基本Stringで返されるが、/は、数字型へ自動変換される
console.log("30" / "5");
//6
console.log(result)