const solution = (n, k) => (n*12000)+((k-Math.floor(n/10))*2000);


console.log(solution(10,3))
// 1인분 12,000원
// 음료수 2,000원