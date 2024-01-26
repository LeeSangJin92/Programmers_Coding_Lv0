function solution(number) {
    let sum = 0;
    number.split('').forEach(data => {
            sum = parseInt(data) + sum;        
    });
    return sum%9;
}