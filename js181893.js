function solution(arr, query) {
    query.forEach((data,index) => {
        arr = index%2==0?arr.slice(0,data+1):arr.slice(data);
    });
    return arr;
}

console.log(solution([4,5,4], [1,0]));