function solution(n, k) {
    let result = [];
    for(let i = 1; i<=n; i++){
        if(i%k==0) result.push(i);
    }
    return result;
}

// const solution=(n,k)=>Array(~~(n/k)).fill(k).map((v,i)=>v*(i+1))
// ※ ~~ 문법은 Math의 floor와 동일 (소숫점 내림)