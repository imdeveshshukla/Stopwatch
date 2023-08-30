var tim = new Date();
var t = document.querySelector('#time');
var sec = document.querySelector('#sec')
var i = 0;
function startFunc(){
    
    setInterval(incre,1000);
    
}
function stopFunc() {
    
}
function incre(i) {
    // let i = 0 ;
    // setInterval(function(){
    //     sec.textContent = i++;
    // },1000);
    
    var k = sec.textContent/1;
    // console.log(typeof(k));
    if(k < 10) sec.textContent = `0${i}`
    else sec.textContent = i;
    i++;
}




// setInterval(()=>{
//     const currTime = new Date().getTime();
//     var incr = Math.round((currTime - tim.getTime())/1000); 
// },1000)