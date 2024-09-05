const solution = (s1, s2) => [...new Set([...s1,...s2])].reduce((result,word)=>(s1.includes(word)&&s2.includes(word))?++result:result,0);

console.log(solution(["a", "b", "c"],["com", "b", "d", "p", "c"]))
console.log(solution(["n", "omg"],["m", "dot"]))