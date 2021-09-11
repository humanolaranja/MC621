const permuteWithRepeat = (arr, m = []) => {
    if (arr.length === 0) {
        result.push(m)
    } else {
        for (let i = 0; i < arr.length; i++) {
            let curr = arr.slice();
            let next = curr.splice(i, 1);
            permuteWithRepeat(curr.slice(), m.concat(next))
        }
    }
}