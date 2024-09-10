const solution = ([a,b]) => 
    Array(a+b-1).fill(0).map((_,index) => 
        index+1).filter(num => 
            Math.min(a,b)+num>Math.max(a,b)).length;



console.log(solution([11, 7]))
console.log(solution([1, 2]))