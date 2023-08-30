var tim = new Date();
var t = document.querySelector('#time');
var sec = document.querySelector('#sec')
var i = 0;
var id;
function startFunc(){
    id = setInterval(update,1000);
    console.log(id);
    
}
function stopFunc() {
    // i=0;
    console.log(id);
    clearInterval(id);
}
function resFunc(){
    i=0;
    update();
}
function update() {
    let k = sec.textContent;
    if (k/1 < 10) {
        sec.textContent = "0"+i;
    }
    else
        sec.textContent = i;
    i++;
}




// setInterval(()=>{
//     const currTime = new Date().getTime();
//     var incr = Math.round((currTime - tim.getTime())/1000); 
// },1000)