const solution = arr => {let answer = arr.reduce((result, num)=>
    result.at(-1)!==num?[...result,num]:result.slice(0,-1)
,[]);
return answer[0]==undefined?[-1]:answer
}

console.log(solution([0, 1, 1, 0]));