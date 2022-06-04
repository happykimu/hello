// Boolean , True か　False

const name = "mimi";
const age = 30;

console.log(name == 'mimi'); //true
console.log(age > 50); //false


console.log(
    Boolean(1),
    Boolean(123),
    Boolean("javascript"),
    Boolean(0),
    Boolean(""),
    Boolean(null),
    Boolean(undefined),
    Boolean(NaN),
)
//0、文字列なし、null、undefined、NaNは全てfalseで返す、そのほかは全てtrue

console.log(Boolean(0)); //false
console.log(Boolean('0')); //true
console.log(Boolean("")); //false
console.log(Boolean(' ')); //true
