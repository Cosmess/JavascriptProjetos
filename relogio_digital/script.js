function updateClock(){

    //captura os elementos do html
    const clockElement = document.querySelector(".clock")
    const hoursElement = document.querySelector(".hours")
    const minutesElement = document.querySelector(".minutes")
    const secondsElement = document.querySelector(".seconds")

    //função para pegar a data atual
    const now = new Date();

    //Parse horas, minutos e segundos
    const hours = now.getHours().toString().padStart(2,"0")
    const minutes = now.getMinutes().toString().padStart(2,"0")
    const seconds = now.getSeconds().toString().padStart(2,"0")

    // atribue os dados capturados e tratados para os elementos html
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;

}

// dispara a função a cada 1 segundo
setInterval(updateClock,1000);
