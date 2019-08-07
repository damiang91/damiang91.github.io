$(function() {
    let ballsLotto = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49]
let result = [];
//wyswietla wszystkie kulki
const ballsAll =() => {
    for( var i=0; i<ballsLotto.length; i++){
        $("header").append($(`<span class="pileczka"></span>`).text(ballsLotto[i]));
    }
}
var count = 0;
// dodaje kuleczki poprzez losowanie
    const randomize = () =>{
        if (count ===0){
        if (result.length === 6) return;

            var number = Math.floor(Math.random() * 49 +1);
            for(var i=0;i<result.length; i++){
                if (number === result[i] || number === (result[i] + 1) || number === (result[i] - 1))
                return randomize();
            }   
        $("body").append($("<div></div>").text(number));
       result.push(number);}
       else {
           count--;
       }
    }

    
// usuwa jedna kuleczke
const rem = () => {
    if(count===5) {result=[];
    }
    $("div:last").remove();
    result.length--;
    if (count < 5){
    count++;
    }
    else 
    count=0;
    } 
//  usuwa wszystkie kuleczki
const remAll = ()=> {
    result=[];
    $("div").remove();
}
$("button").click(function(){
    randomize();
});
$(".btn-r").click(function(){
    rem();
})
$(".btn-all").click(function(){
    remAll();
})
ballsAll();
});






