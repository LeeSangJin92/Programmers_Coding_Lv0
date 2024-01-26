// 등차수열의 특정한 항만 더하기
function solution(a, d, included) {
    let result = 0;
    included.forEach((data,index) => {
        result = data?result+a:result;
        a = a + d;
    });
    return result;
}