const solution = (balls, share) => Number(calculate(balls)/(calculate(share)*calculate(balls-share)));
const calculate = (number) => Array(number).fill().map((_,index)=>index+1).reduce((result,num)=> BigInt(result)*BigInt(num),BigInt(1));

console.log(solution(30,16))

//factorial