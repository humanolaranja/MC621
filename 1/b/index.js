const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


const teamOlympiad = (members) => {
    const elements = members.toString().split(' ');
    let output = "";
    let programmer = [];
    let mathematician = [];
    let sportsman = [];

    for (let index = 0; index < elements.length; index++) {
        const element = Number.parseInt(elements[index]);

        switch (element) {
            case 1:
                programmer.push(index + 1);
                break;
            case 2:
                mathematician.push(index + 1);
                break;
            case 3:
                sportsman.push(index + 1);
                break;
            default:
                break;
        }
    }


    
    const sizes = [programmer.length, mathematician.length, sportsman.length];
    const min = Math.min.apply(Math, sizes);
    
    programmer = programmer.splice(programmer.length - min)
    mathematician = mathematician.splice(mathematician.length - min)
    sportsman = sportsman.splice(sportsman.length - min)

    output += `${min}`;

    for (let index = 0; index < min; index++) {
        output += `\n${programmer[index]} ${mathematician[index]} ${sportsman[index]}`
    }

    return output
}

var i = 0;
readline.on('line', line => {
    if (i == 0) {
        i++
    } else {
        readline.close(), console.log(teamOlympiad(line));
    }
});