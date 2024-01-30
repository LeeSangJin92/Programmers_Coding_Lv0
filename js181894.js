function solution(arr) {
    if(!arr.includes(2)) return [-1];
    return arr.slice(arr.indexOf(2),arr.lastIndexOf(2)+1);
}

console.log(solution([1,1,1]));