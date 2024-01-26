function solution(my_string, is_prefix) {
    let result = [];
    
    for(let index = 0;index <= my_string.length;index++){
        result.push(my_string.substring(0,index));
    }
    return result.includes(is_prefix)?1:0;
}