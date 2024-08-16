function solution(num_list) {
    let oddSum = 0;
    let evenSum = 0
    num_list.forEach((data, index) => {
        if(index%2===0) evenSum = evenSum + data;
        else oddSum = oddSum + data;
    });

    if(oddSum>=evenSum) return oddSum;
    else return evenSum;
}