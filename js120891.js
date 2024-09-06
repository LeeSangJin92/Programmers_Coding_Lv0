const solution = (order) => [...(""+order)].filter(num=>/[369]/g.test(num)).length

console.log(solution(125));
console.log(solution(29423));