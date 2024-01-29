function solution(num_list) {
    let result = num_list.sort(function(a,b){return a - b;})
        result.shift();
        result.shift();
        result.shift();
        result.shift();
        result.shift();
    return result;
}
solution([12, 4, 15, 46, 38, 1, 14, 56, 32, 10])