const solution = (cipher, code) => ["",...cipher].filter((_,index)=>index%code==0).join('');

console.log(solution("dfjardstddetckdaccccdegk",4))