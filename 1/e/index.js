const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


const perfectPermutation = (n) => {
    let output = ""
    if (n % 2 != 0) {
        return -1;
    }
    output = "2 1";
    for (let i = 3; i < n; i += 2)
    {
        output +=  ` ${i + 1} ${i}`
    }
    return output
}

readline.on('line', line => {
    readline.close(), console.log(perfectPermutation(line));
});