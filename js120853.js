const solution = (s) => (s.match(/-*(?!\d+\sZ)\d+/g)||[0]).reduce((result,num)=>result+ +num,0)


console.log(solution("1 2 Z 3"))
console.log(solution("10 20 30 40"))
console.log(solution("-1 -2 -3 Z"))
console.log(solution("10 Z 20 Z"))