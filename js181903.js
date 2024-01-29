function solution(q, r, code) {
    let strArr = [];
    let result = '';
    for(let index = 0; index<code.length;index+=q){
        strArr.push(code.substring(index,index+q).split(''));
    }
    strArr.forEach(data => {
        result = result + (!data[r]?"":data[r]);
    });

    return (result);
}

solution(3,1,"qjnwezgrpirldywt");