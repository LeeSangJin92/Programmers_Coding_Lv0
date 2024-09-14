const solution = (n) => Array(n).fill().map((_,index)=>index+1).reduce((result,num)=> n%num==0?++result:result,0)

console.log(solution(20))