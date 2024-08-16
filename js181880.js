function solution(num_list) {
    let count = 0;
    num_list.forEach(data => {
        while(!(data===1)){
            count = count + 1;
            if(data%2===0) data = data/2;
            else data = (data-1)/2;
        }
    });
    return count;
}

console.log(solution([12, 4, 15, 1, 14]))