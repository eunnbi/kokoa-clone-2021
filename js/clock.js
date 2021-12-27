const clock = document.querySelector("#clock");

function setClock(){
    const date = new Date();
    const hour = date.getHours().toString(10).padStart(2, "0");
    const minute = date.getMinutes().toString(10).padStart(2, "0");
    clock.innerText = `${hour}:${minute}`;
}

setClock();
setInterval(setClock, 1000);