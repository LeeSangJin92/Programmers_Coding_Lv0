const solution = (arr, k) => [...new Set(arr)].reduce((result,num,index)=>
        {result.length>index&&result.splice(index,1,num); return result}
,Array(k).fill(-1));

console.log(solution([0, 1, 1, 2, 2, 3],3));
console.log(solution([0, 1, 1, 1, 1],4));