// 수열과 구간 쿼리 2

function solution(arr, queries) {

    let result = [];
    queries.forEach((query,index1) => {
        let word = null;
        for(let index2 = query[0];index2<=query[1];index2++){
            if(arr[index2]>query[2]){
                word = word==null?arr[index2]:word>arr[index2]?arr[index2]:word;
            }
        }
        result.push(word==null?-1:word);
    });
    return result;
}