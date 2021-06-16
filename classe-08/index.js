const numeros = [3, 24, 1, 8, 11, 7, 15, 39];

let maiorNumero = 0;

for(item of numeros){
    if(item > maiorNumero){
        maiorNumero = item;
    }
}

console.log(maiorNumero);