//generate a random color

const randomNumber = function(){
    let hex = "0123456789ABCDEF"
    let color = '#'
    for(let i = 0; i < 6;i++){
        color += hex [Math.floor(Math.random() * 16)]
    }
    return color;
};
let IntervalId
const startChangingColor = function(){
    if(!IntervalId){
        IntervalId = setInterval(ChangeBgc,1000)
    }
    function ChangeBgc(){
        document.body.style.backgroundColor = randomNumber();
    }
}
const stopChangingColor = function(){
        clearInterval(IntervalId);
        IntervalId = null;
}
document.querySelector("#start").addEventListener('click', startChangingColor)
document.querySelector("#stop").addEventListener('click', stopChangingColor)
