const solution = (numbers, k) => +(numbers+",").repeat(Math.floor((k*2)/numbers.length)+1).match(/\d+/g).filter((_,index)=>index%2==0)[k-1];


// 간단 답안
// numbers[(--k*2)%numbers.length];

console.log(solution([1, 2, 3, 4, 5, 6],5));
console.log(solution([1, 2, 3],3));