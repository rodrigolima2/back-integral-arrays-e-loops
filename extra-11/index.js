const original = [5, 7, 13, 17, 26, 34, 118, 245];

const numEntre10e20 = [];

for(item of original){
    if(item >= 10 && item <= 20 || item > 100){
        numEntre10e20.push(item);
    }
}

console.log(numEntre10e20);