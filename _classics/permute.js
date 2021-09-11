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

//  https://www.tutorialspoint.com/creating-all-possible-unique-permutations-of-a-string-in-javascript