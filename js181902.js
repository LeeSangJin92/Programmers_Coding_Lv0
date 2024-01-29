function solution(my_string) {
    let result = Array.from({length: 52}, (data)=> data = 0)
    my_string.split('').forEach( word => {
        let index = word.charCodeAt()
        result[index<=90?index-65:index-71]++;
    });
    return result;
} 

solution("testAA");