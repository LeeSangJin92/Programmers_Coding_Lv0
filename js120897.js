const solution = (n) => calculate(n-1,[n]).reverse();

const calculate = (num,result) => {
    result[0]%num==0&&result.push(num);
    --num>0&&calculate(num,result);
    return result;
}


console.log(solution(24));
console.log(solution(29));