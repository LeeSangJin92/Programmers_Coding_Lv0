function solution(my_strings, parts) {
    let result = [];
    parts.forEach((data,index) => { 
       result.push(my_strings[index].substring(data[0],data[1]+1))
    });
    console.log(result.join(''));
}

solution(["progressive", "hamburger", "hammer", "ahocorasick"],[[0, 4], [1, 2], [3, 5], [7, 7]]);