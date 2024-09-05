const solution = (n) => [...n+""].reduce((result,num)=>result+ +num,0)

console.log(solution(1234));