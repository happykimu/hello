// and(&&), or(||), not(!)

//名前が tomか、　成人なら　通過

const name = "mike";
const age = 20;

if(name === 'tom' || age > 19){
    console.log('通過');
}
//通過

//名前が　tomで、　成人であれば　通過


if(name === 'mike' && age > 21){
    console.log('通過');
}   else {
    console.log('通過できません.');
}
//通過できません.

// const age1 = prompt('年齢は..?');
// const isAdult = age1 > 19;

// if(!isAdult){
//     console.log('帰れ');
// }

/* VSCでpromptが使えないので、コメントにしてます。
*/

const gender = 'F';
const name2 = 'Jane';
const isAdult1 = true;

if(gender === 'M' && name2 === 'Mike' || isAdult1){
    console.log('通過')
} else {
    console.log('帰れ')
}
//通過
//優先順位があり、Mで名前がJaneじゃなくても、isAdult1がtrueである為、通貨になる

if((gender === 'M' && name2 === 'Mike') || isAdult1){
    console.log('通過')
} else {
    console.log('帰れ')
}
//通過

if(gender === 'M' && (name2 === 'Mike' || isAdult1)){
    console.log('通過')
} else {
    console.log('帰れ')
}
//帰れ


