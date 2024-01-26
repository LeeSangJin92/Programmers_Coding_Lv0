//콜라츠 수열 만들기

function solution(n) {
    let result=[];
    while (n!=1) {
        console.log(n);
        result.push(n);
        n = n%2==0?n/2:3*n+1;
    }
    result.push(n)
    console.log(result);
    return result;
}