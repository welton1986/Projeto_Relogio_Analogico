
// Selecionando a classe e jogando na variavel. (Relogio digital)
let digitalElement = document.querySelector('.digital');

// Selecionando a classe e jogando na variavel. (Ponteiros do relogio analogico)
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock(){
    // Essa função recebe a hora exata do sistema. (new date)
    let now = new Date();

    // Pegando a variavel (now) e buscando hora , minuto e seundos atuais (new Date)
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    //RELOGIO DIGITAL 

    // Aqui estou jogando dentro da classe (.digital), as variaveis com o tempo atual.
    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;


    //RELOGIO ANALOGICO

    // Aqui foi criado variaveis com a equação que calcula quantos graus tem um segundo, minuto e hora e  onde exibir na tela.
    let sDeg = ((360 / 60) * second) - 90 ;
    let mDeg = ((360 / 60) * minute) - 90 ;
    let hDeg = ((360/12) * hour) + ((30/60) * minute) - 90 ;

    // Aqui estou jogando um atributo css para que o ponteiro do segundos, minutos e hora fiquem no lugar certo , estou usando a variavel (sDeg).
    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;

}

// Criando uma função para que quando o valor for menor que 10 , colocar o zero primeiro.
function fixZero(time){
    /*return time < 10 ? `0${time}` : time*/ 
    if(time < 10){
        return '0' + time;
    }else {
        return time;
    }
}

// Função de intervalo, com a função update clock como parametro , sendo atualizada a cada segundo.
setInterval(updateClock, 1000)
// Chama a função e atualiza a tela sem delay.
updateClock()

