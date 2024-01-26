// 이어 붙인 수

function solution(num_list) {
    let number1 = "";
    let number2 = "";
    num_list.forEach(data => {
        if(data%2==0) number1 = number1 + data;
        else number2 = number2 + data;
    });
    return parseInt(number1) + parseInt(number2)
}