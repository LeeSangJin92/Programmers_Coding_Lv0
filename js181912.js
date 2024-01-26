function solution(intStrs, k, s, l) {
    let result = [];
    intStrs.forEach(data => {
        const number = parseInt(data.substring(s,s+l))
        if(number>k) result.push(number)
    });
    console.log(result);
}

solution(["0123456789","9876543210","9999999999999"],50000,5,5);