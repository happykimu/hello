//switch
//if文と似てる
//みかん：100円
//りんご：100円
//バナナ：150円
//キウィ：200円
//メロン：250円
//西瓜：300円
//買いたい果物を聞いて、値段を教える

let fruit = prompt('どんなフルーツを買いたいですか？');

switch(fruit){
    case 'みかん':
        console.log('100円です');
        break;
    case 'リンゴ':
        console.log('100円です');
        break;
    //みかんと、リンゴは同じ値段の為、下記のように、コードを縮めることも可能
    //case 'みかん':
    //case 'リンゴ':
        //console.log('100円です');
        //break;
    case 'バナナ':
        console.log('150円です');    
        break;
    case 'キウィ':
        console.log('200円です');
        break;
    case 'メロン':
        console.log('250円です');
        break;
    case '西瓜':
        console.log('300円です');
        break;
    default: //defaultを入れないと、該当フルーツがない場合、プログラムが実行されたかどうか、わからない。ifのelseと似たような機能 
        console.log('該当のフルーツがありません');        
}
//各ケースの間、break を入れないと、該当するキーワード以降のコードも、全て実行し、出力される