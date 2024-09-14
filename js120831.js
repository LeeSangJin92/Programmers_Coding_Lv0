const solution = (n) => Array(n).fill().map((_,index)=>index+1).reduce((result,num)=> num%2==0?result+num:result,0);

console.log(solution(10))