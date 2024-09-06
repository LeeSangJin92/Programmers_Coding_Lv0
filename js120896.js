const solution = (s) => [...new Set(s)].sort().reduce((result,word_Set)=>
    [...s].reduce((count,word_S)=>word_S==word_Set?++count:count,0)==1?result+word_Set:result
,"");


console.log(solution("abcabcadc"));
console.log(solution("abdc"));
console.log(solution("hello"));