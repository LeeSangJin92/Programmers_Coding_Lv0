const solution = (my_string) => my_string.match(/\d/g).reduce((result,num)=>result+ +num,0);

console.log(solution("aAb1B2cC34oOp"))
console.log(solution("1a2b3c4d123"))