function solution(num_list) {
    return num_list.findIndex((data,index)=>{
        return data<0;
    })
}

console.log(solution([12, 4, 15, 46, 38, 1, 15]));