// // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // let somaTotal = 0
// // for (let i = 0; i < arr.length; i++) {
// //     const numeroAtual = arr[i];
// //     somaTotal += somaTotal + numeroAtual
// // }
// // console.log(somaTotal);


// // let numero = 5

// // for (let i = 1; i <= 10; i++) {
// //     console.log(`${numero} x ${i} = ${numero * i}`);   
// // }

// const anos = [2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030]

// for (let i = 0; i < anos.length; i++) {
//     const element = anos[i];

//     console.log(`O fotaleza estava no ano de ${element} na serie C`);
    
    
// }

for (let i = 10; i !== 0; i--) {
    console.log(`${i}`)    
}

// let lista = [1,2,3,4,5,6,7,8,9,10]
// let pares = ""

// for (let i = 0; i < lista.length; i++) {
//     const element = lista[i];
//     if (element % 2 === 0) {
//         pares += `${element} `
//     }
// }   
// console.log(`Os numeros pares sao os ${pares}`);


let lista = [1,2,3,4,5,6,7,8,9,10]
function sum(arr) {
    const result = arr.reduce((accum, prev) => {
       return accum + prev},0)
    console.log(result);    
}

sum(lista)

