const numInteros = [1, 10, 2, 4, 23, 50, 21, 7];

let maior = numInteros[0], menor = numInteros[0], resultado = 0;

for(item of numInteros){
    if(item > maior){
        maior = item;
    }
    if(item < menor){
        menor = item;
    }
}

resultado = maior - menor;

console.log(resultado);