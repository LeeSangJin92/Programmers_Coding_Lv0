const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', function (line) {
    input = line.split(' ');
    let [i, number] = [1,input[0]];
    while(i<=number){
        console.log("*".repeat(i));
        ++i;
    }
}).on('close', function () {
});



