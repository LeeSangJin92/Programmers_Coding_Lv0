//배열 만들기 2

function solution(l, r) {

    let result = [];
    const regex = new RegExp("[^05\s]+");
    for(;l<=r;l++){
        if(!regex.test(l)) result.push(l);
    }
    return result.length==0?[-1]:result;
}

solution(10,20);