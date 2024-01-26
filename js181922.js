// 수열과 구간 쿼리 4
function solution(arr, queries) {
    
    queries.forEach((query,index1) => {
        for(let index2 = query[0];index2<=query[1];index2++){
            if(index2%query[2]==0){
                arr[index2] = arr[index2]+1;
            }
        }
    });
    return arr;
}