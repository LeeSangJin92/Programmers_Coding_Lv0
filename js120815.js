const solution = (n) => n/gcd(6,n);

// ✏️ 최소 공배수 구하는 공식
// const solution = (n) => a * b / gcd( a, b)
const gcd = (a,b) => b == 0 ? a : gcd( b, a % b);

console.log(solution(6));