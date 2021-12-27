const replyForm = document.querySelector(".reply-form");
const replyInput = replyForm.querySelector("input");
const chatScreen = document.querySelector(".main-chat");

const days = [
    "Sunday", 
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

window.addEventListener("DOMContentLoaded", function(){
    const today = new Date();
    const year = today.getFullYear();
    const month = months[today.getMonth()];
    const date = today.getDate();
    const day = days[today.getDay()];
    const hour = today.getHours().toString(10).padStart(2, "0");
    const minute = today.getMinutes().toString(10).padStart(2, "0");
    chatScreen.innerHTML = `<div class="chats__timestamp">
    ${day}, ${month} ${date}, ${year}
    </div>
    <div class="message-row">
            <img src="images/patrickstar.png" alt="">
            <div class="message-row__content">
                <div class="message__author">DDONGG-EE</div>
                <div class="message__info">
                    <span class="message__bubble">Hi!</span>
                    <span class="message__time">${hour}:${minute}</span>
                </div>
            </div>
      </div>`;
});
replyForm.addEventListener("submit", function(e){
    e.preventDefault();
    const message = replyInput.value;
    const date = new Date();
    const hour = date.getHours().toString(10).padStart(2, "0");
    const minute = date.getMinutes().toString(10).padStart(2, "0");
    
    const messageElement = document.createElement("div");
    messageElement.classList.add("message-row");
    messageElement.classList.add("message-row--own");
    messageElement.innerHTML = `<div class="message-row__content">
                <div class="message__info">
                    <span class="message__bubble">${message}</span>
                    <span class="message__time">${hour}:${minute}</span>
                </div>
            </div>`;
    chatScreen.appendChild(messageElement);
    replyInput.value = "";
});