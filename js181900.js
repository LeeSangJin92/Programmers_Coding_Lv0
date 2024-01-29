function solution(my_string, indices) {

    let result = [];
    my_string.split('').filter((data, index)=>{
    
        if(!indices.sort().includes(index)) result.push(data); 

    })
    return result.join('');
}
