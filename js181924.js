//수열과 구간 쿼리 3

function solution(arr, queries) {
    queries.forEach(query => {
        let i = query[0];
        let j = query[1];
        [arr[i],arr[j]] = [arr[j],arr[i]];
    });
    return arr;
}