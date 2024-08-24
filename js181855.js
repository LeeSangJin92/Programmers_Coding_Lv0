const solution = (strArr) => Math.max(...Object.values(strArr.reduce((result, str)=>result[str.length]?{...result,[str.length]:result[str.length]+1}:{...result,[str.length]:1},{})))


console.log(solution(["a","cs","bc","d","efg","hi"]));
console.log(Math.max(...[1,2,3]))

