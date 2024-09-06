const solution = (sides) => sides.reduce((result,num)=>result+num)-Math.max(...sides)*2>0?1:2;

console.log(solution([1, 2, 3]));
console.log(solution([3, 6, 6]));
console.log(solution([199, 72, 222]));