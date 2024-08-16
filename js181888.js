function solution(num_list, n) {
    return num_list.filter((data, index)=>{
        if(index%n===0) return data;
    });
}