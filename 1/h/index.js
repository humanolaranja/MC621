const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


const luckyConversion  = (a, b) => {
    const aElements = a.toString().split('');
    const bElements = b.toString().split('');
    let fours = 0;
    let sevens = 0;

    for (let index = 0; index < aElements.length; index++) {
        if(aElements[index] != bElements[index]) {
            if(aElements[index] == '4') {
                fours++;
            } else {
                sevens++
            }
        }
        
    }

    if(fours == 0){
        return sevens;
    }
    if(sevens == 0){
        return fours;
    }
    
    return fours > sevens ? fours : sevens;
}

var i = 0;
var a = ""
readline.on('line', line => {
    switch (i) {
        case 0:
            i++;
            a = line;
            break;
        case 1:
        default:
            readline.close(), console.log(luckyConversion(a, line));
            break;
    }
});