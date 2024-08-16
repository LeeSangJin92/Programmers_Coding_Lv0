function solution(arr, queries) {
    queries.forEach((query) => {
        arr = arr.map((data,index)=>{
            if(query[0]<=index&&query[1]>=index) return data+1;
            else return data;
        });
    });
    return arr;
}

console.log(solution([0, 1, 2, 3, 4], [[0, 1],[1, 2],[2, 3]]));