const solution = (spell, dic) => dic.reduce((result,str)=>spell.reduce((answer,word)=>str.includes(word)?answer:false,true)?1:result,2);

console.log(solution(["p", "o", "s"],["sod", "eocd", "qixm", "adio", "soo"]));
console.log(solution(["z", "d", "x"],["def", "dww", "dzx", "loveaw"]));