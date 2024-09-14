const solution = (age) => [...age+""].reduce((result,num)=>result+String.fromCharCode(+num+97),"");

console.log(solution(23))