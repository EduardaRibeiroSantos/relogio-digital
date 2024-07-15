const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let h =  dateToday.getHours();
    let min =  dateToday.getMinutes();
    let s =  dateToday.getSeconds();

    if (h < 10) h = '0' + h;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;

    horas.textContent = h;
    minutos.textContent = min;
    segundos.textContent = s;
})

let dataAtual = new Date();

let diaS = dataAtual.getDay();
let dia = dataAtual.getDate();
let mes = dataAtual.getMonth(); 
let ano = dataAtual.getFullYear();

const diasS = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

let diaSemana = diasS[diaS];
let mesEscrito = meses[mes];
let dataFormatada = diaSemana + ', ' + dia + ' de ' + mesEscrito + ' de ' + ano;

document.getElementById('data').innerHTML = dataFormatada;
