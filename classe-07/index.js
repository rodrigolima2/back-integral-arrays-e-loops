const nomes = ["Ana", "Joana", "Carlos", "amanda", "Arlinda", "amaral", "arlequino", "jorginho", "Alok"];
const nomesComA = [];

for(item of nomes){
    if(item[0] === "a" || item[0] === "A"){
        nomesComA.push(item);
    }
}

console.log(nomesComA);