function solution(my_string, index_list) {
    
    const stringArr = my_string.split('');
    const result = [];
    index_list.forEach(indexNumber => {
        result.push(stringArr[indexNumber]);
    });
    return result.join('');
}

solution("zpiaz",[1, 2, 0, 0, 3])