const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const nextSuperLucky = (number) => {
    let permutations = [];
    const elements = number.toString().split('');
    for (let index = Math.round(elements.length); index < (elements.length + 1) * 1.5; index++) {
        if (index % 2 != 0) {
            continue;
        }
        const fours = Number.parseInt("4".padEnd(index / 2, 4))
        const sevens = Number.parseInt("7".padEnd(index / 2, 7))

        const together = `${fours}${sevens}`;

        permutations.push(...permute(together));
    }

    permutations = permutations.map(el => Number.parseFloat(el));
    permutations.sort((a, b) => a - b);

    for (let index = 0; index < permutations.length; index++) {
        const element = permutations[index];

        if (element >= number) {
            return element
        }
    }
}

const permute = (str = '') => {
    if (!!str.length && str.length < 2 ){
       return str
    }
    const arr = [];
    for (let i = 0; i < str.length; i++){
       let char = str[i]
       if (str.indexOf(char) != i)
          continue
          let remainder = str.slice(0, i) + str.slice(i + 1, str.length)
          for (let permutation of permute(remainder)){
             arr.push(char + permutation)
          }
    }
    return arr
 }

readline.on('line', line => {
    readline.close(), console.log(nextSuperLucky(line));
});