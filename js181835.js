const solution = (arr, k) => arr.map((result)=>k%2===0?result+k:result*k);

console.log(solution([1, 2, 3, 100, 99, 98],3))