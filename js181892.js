function solution(num_list, n) {
   return num_list.filter(( _, index)=>{
        return index>=n-1;
    })
}

/*
function solution(num_list, n) {
     return num_list.slice(n - 1);
   }
*/
console.log(solution([2, 1, 6],3));