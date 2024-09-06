const solution = (chicken) => calculate(chicken,0);

const calculate = (chicken,result) => {
    let coupon = Math.floor(chicken/10);
    result += coupon;
    return coupon+(chicken%10)>=10?calculate((coupon+chicken%10),result):result;
}

console.log(solution(5))