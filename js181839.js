const solution = (a, b) =>
    Math.abs((!(a%2===0)&&!(b%2===0))?a**2+b**2:
    a%2===0&&b%2===0?a-b:2*(a+b));

console.log(solution(3,5));
console.log(solution(6,1));
console.log(solution(2,4));