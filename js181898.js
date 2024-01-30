function solution(arr, idx) {
    let result = [];
    arr.forEach((data,index)=>{
        if(data==1&&idx<=index) result.push(index);
    })
    return result[0]==null?-1:result[0];
}

console.log(solution([0, 0, 0, 1], 1));