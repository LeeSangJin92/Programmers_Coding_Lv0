const solution = (price) => 
    (price>=500000&&dc(price,20))||
    (price>=300000&&dc(price,10))||
    (price>=100000&&dc(price,5))||price;

const dc = (price,percent) => price - Math.ceil(price * percent / 100) ;
// ✏️ 문제에서 소숫점 이하는 버림으로 되어 있으나 실직적으로는 올림으로 풀어야 클리어됨!
// ✏️ Math.floor => 소숫점 이하 내림    ✏️ Math.ceil => 소숫점 이하 올림

console.log(solution(150000))
console.log(solution(199999))
console.log(solution(399999))
console.log(solution(100010))