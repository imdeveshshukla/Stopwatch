var tim = new Date();
var t = document.querySelector('#time');
setInterval(()=>{
    const currTime = new Date().getTime();
    var incr = Math.round((currTime - tim.getTime())/1000); 
},1000)

function startFunc(){
    let sec = document.querySelector('#sec')
    var i = 0;
}

function incre(i) {
    setInterval(function(){
        sec.textContent = i++;
    },1000);
}
