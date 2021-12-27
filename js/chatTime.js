const time = document.querySelector(".user-component__time");


window.addEventListener("DOMContentLoaded", function(){
    const today = new Date();
    const hour = today.getHours().toString(10).padStart(2, "0");
    const minute = today.getMinutes().toString(10).padStart(2, "0");
    time.innerText = `${hour}:${minute}`;
});