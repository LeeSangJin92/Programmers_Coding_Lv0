const solution = (number0) => {
    let result = [];
    let number1 = 2;
    while(number0!=1){
        if(number0%number1==0) {
            result.push(number1)
            number0 = number0/number1
        } else number1++;
    }
    return [...new Set(result)];
}




console.log(solution(2))
console.log(solution(12))
console.log(solution(17))