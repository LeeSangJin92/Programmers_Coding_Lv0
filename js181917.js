//간단한 논리 연산

function solution(x1, x2, x3, x4) {
    let result = (x1||x2)&&(x3||x4)
    console.log(result);
    return result;
}