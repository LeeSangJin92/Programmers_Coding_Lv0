const solution = (strlist) => strlist.reduce((result,str)=>[...result,(str.length)],[]);

console.log(solution(["We", "are", "the", "world!"]));