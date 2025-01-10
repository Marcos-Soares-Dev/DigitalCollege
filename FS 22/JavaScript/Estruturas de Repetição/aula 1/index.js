function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

const year = new Date().getFullYear(); // ou você pode definir um ano específico
const daysInFebruary = isLeapYear(year) ? 29 : 28;

// Referências aos elementos HTML
const dia = document.getElementById('dia');
const mes = document.getElementById('mes');
const ano = document.getElementById('ano');

// Preencher os dias
for (let i = 1; i <= 31; i++) {
    dia.innerHTML += `<option value="${i}">${i}</option>`;
}

// Preencher os meses
const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
for (let i = 0; i < meses.length; i++) {
    mes.innerHTML += `<option value="${i + 1}">${meses[i]}</option>`;
}

// Preencher os anos (exemplo de 1900 até o ano atual)
for (let i = 1900; i <= year; i++) {
    ano.innerHTML += `<option value="${i}">${i}</option>`;
}

// Ajustar os dias de fevereiro com base no ano bissexto
if (mes.value === "2") {
    dia.innerHTML = "";
    for (let j = 1; j <= daysInFebruary; j++) {
        dia.innerHTML += `<option value="${j}">${j}</option>`;
    }
}