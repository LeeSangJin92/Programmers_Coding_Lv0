const solution = (num_list, n) => num_list.reduce((result,num,index)=>{
    console.log(result);
    result[Math.floor(index/n)].push(num);
    return result;
},Array(num_list.length/n).fill().map(_=>[]));

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8],2))