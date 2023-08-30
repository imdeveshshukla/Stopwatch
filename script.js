var tim = new Date();
var min = document.querySelector('#min');
var sec = document.querySelector('#sec')
var i = 0;
var j =0;
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
    j=0;
    min.textContent = '00';
    sec.textContent = '00';
}
function update() {
    let k = sec.textContent;
    if (k/1 < 9) {
        sec.textContent = "0"+i;
    }
    else if(k>59){
        j++;
        i=0;
        sec.textContent = "0"+i;
        if(j<10)
            min.textContent = '0'+j;
        else    
            min.textContent = j;
    }
    else{
        sec.textContent = i;
    }
    i++;
}




// setInterval(()=>{
//     const currTime = new Date().getTime();
//     var incr = Math.round((currTime - tim.getTime())/1000); 
// },1000)