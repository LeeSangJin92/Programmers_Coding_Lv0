const solution = (array, n) => {
    let arr = array.sort().map(num=>Math.abs(n-num));
    let index = arr.indexOf(Math.min(...arr));
    return array[index];
}

console.log(solution([1, 3, 10, 19, 21],28));
console.log(solution([10, 11, 12],13));