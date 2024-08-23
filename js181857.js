const solution = (arr) => {
    let result = 0;
    while(arr.length>2**result){
        result++; 
    }
    return arr.concat([...new Array(2**result-arr.length).fill(0)]);
}

console.log(solution([1, 2, 3, 4, 5, 6]));
console.log(solution([58, 172, 746, 89]));