const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


const eevee  = (string) => {
    const pokemons = ["jolteon", "flareon", "umbreon", "leafeon", "glaceon", "sylveon"]
    const size = string.length;

    if(size === 8) {
        return "vaporeon";
    }

    if(size === 6) {
        return "espeon";
    }
    let output = "";
    let minimum = 9;
    for (let index = 0; index < pokemons.length; index++) {
        const element = pokemons[index];
        const pokemonDistance = distance(element, string);
        if(pokemonDistance < minimum) {
            minimum = pokemonDistance
            output = element;
        }
        
    }
    return output;
}

var i = 0;
readline.on('line', line => {
    switch (i) {
        case 0:
            i++;
            break;
        case 1:
        default:
            readline.close(), console.log(eevee(String(line)));
            break;
    }
});


const peq = new Uint32Array(0x10000);

const myers_32 = (a, b) => {
  const n = a.length;
  const m = b.length;
  const lst = 1 << (n - 1);
  let pv = -1;
  let mv = 0;
  let sc = n;
  let i = n;
  while (i--) {
    peq[a.charCodeAt(i)] |= 1 << i;
  }
  for (i = 0; i < m; i++) {
    let eq = peq[b.charCodeAt(i)];
    const xv = eq | mv;
    eq |= ((eq & pv) + pv) ^ pv;
    mv |= ~(eq | pv);
    pv &= eq;
    if (mv & lst) {
      sc++;
    }
    if (pv & lst) {
      sc--;
    }
    mv = (mv << 1) | 1;
    pv = (pv << 1) | ~(xv | mv);
    mv &= xv;
  }
  i = n;
  while (i--) {
    peq[a.charCodeAt(i)] = 0;
  }
  return sc;
};

const distance = (a, b) => {
  if (a.length < b.length) {
    const tmp = b;
    b = a;
    a = tmp;
  }
  if (b.length === 0) {
    return a.length;
  }
  return myers_32(a, b);
};
