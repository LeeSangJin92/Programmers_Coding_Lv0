const solution = (numer1, denom1, numer2, denom2) => {
    let lcm = denom1 * denom2 / gcd(denom1, denom2);
    let num1 = lcm/denom1;
    let num2 = lcm/denom2;
    console.log(num1, num2);

    return [numer1*num1+numer2*num2, lcm];
}

const gcd = (num1, num2) => num2 == 0 ? num1 : gcd(num2, num1 % num2);

console.log(solution(1,2,3,4))
console.log(solution(9,2,1,3))