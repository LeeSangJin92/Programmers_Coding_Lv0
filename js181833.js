const solution = (n) => Array(n).fill("").map((_,mainIndex)=>Array(n).fill("").map((_,subIndex)=>mainIndex===subIndex?1:0));

console.log(solution(3))