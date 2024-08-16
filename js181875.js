function solution(strArr) {
    return strArr.map((data,index)=>{
        if(index%2===0) return data.toLowerCase();
        else return data.toUpperCase()
    })
}

console.log(solution(["AAA","BBB","CCC","DDD"]))