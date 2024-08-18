function solution(myString, pat) {
    let result = 0;
    let index = myString.indexOf(pat);
    while(index!==-1){
        result++;
        index = myString.indexOf(pat,index+1);
    }
    return result;
}

console.log(solution("banana","ana"));

