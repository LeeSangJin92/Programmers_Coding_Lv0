function solution(numbers, n) {
    let result = 0;
    numbers.forEach(data => {
        if(result<=n||result+data<=n) result=result+data;
    });
    return result;
}

console.log(solution([34, 5, 71, 29, 100, 34], 123))