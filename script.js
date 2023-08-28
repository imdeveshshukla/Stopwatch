var tim = new Date();
var t = document.querySelector('#time');
var sec = document.querySelector('#sec')

function startFunc(){
    var i = 0;
    incre(i);
}
function stopFunc() {
    
}
function incre(i) {
    // let i = 0 ;
    // setInterval(function(){
    //     sec.textContent = i++;
    // },1000);
    if((sec.textContent)/1 < 10) sec.textContent = `0${i}`
    sec.textContent = i;
    i++;
}






// setInterval(()=>{
//     const currTime = new Date().getTime();
//     var incr = Math.round((currTime - tim.getTime())/1000); 
// },1000)