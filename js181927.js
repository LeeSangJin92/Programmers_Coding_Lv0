//마지막 두 원소

function solution(num_list) {
    number1 = num_list[num_list.length-1]
    number2 = num_list[num_list.length-2]
    num_list.push(number1>number2?number1-number2:number1*2);
    return  num_list;
}