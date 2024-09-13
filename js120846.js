const solution = (n) => {
    let result = [];
    let number = 1;

    while(number<=n){
        calculate(number)&&result.push(calculate(number))
        number++;
    }
    return result.length;
}

const calculate = (num) => {
    let result = [];
    let number = 1;
    while(number<=num){
        if(num%number==0) result.push(number);
        number++;
    }
    return result.length>=3?num:null;
}

console.log(solution(10))