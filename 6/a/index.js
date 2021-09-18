const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const oddDivisor = (elements) => {
    let output = [];
    for (let index = 0; index < elements.length; index++) {
        let element = Number(elements[index]);
        let found = false;
        while (element > 1) {
            if (element % 2 === 1) {
                found = true;
                break;
            } else {
                element /= 2;
            }
        }
        output.push(found ? "YES" : "NO")
    }
    return output.join("\n");
};

var i = 0;
var inputs = 0;
var elements = [];

readline.on("line", (line) => {
    if (i == 0) {
        inputs = line;
        i++;
    } else {
        if (i == inputs) {
            elements.push(line);
            readline.close(), console.log(oddDivisor(elements));
        } else {
            i++;
            elements.push(line);
        }
    }
});
