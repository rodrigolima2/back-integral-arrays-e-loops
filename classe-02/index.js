const letras = ["A", "a", "B", "C", "E", "e"];

let contador = 0;

for(item of letras){
    if(item === "e" || item === "E"){
        contador++;
    }
}

if(contador == 0){
    console.log('Nenhuma letra "E" ou "e" foi encontrada.')
} else if(contador == 1){
    console.log('Foi encontrada 1 letra "E" ou "e"');
} else{
    console.log(`Foram encontradas ${contador} letras "E" ou "e"`);
}