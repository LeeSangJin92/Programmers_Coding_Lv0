const solution = (n) => {
    let count = 0;
    let number = 1;
    while(number<=n){
        count++;
        number=number*count
    }
    return count-1
}

console.log(solution(7));
console.log(solution(3628800));