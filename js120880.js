const solution = (numlist, n) => numlist.sort((a,b)=>Math.abs(a-n)-Math.abs(b-n)||b-a);

console.log(solution([1, 2, 3, 4, 5, 6],4));
console.log(solution([10000,20,36,47,40,6,10,7000],30));