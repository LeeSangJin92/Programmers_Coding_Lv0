const solution = (emergency) => emergency.map((num,_)=>
    [...emergency].sort((a,b)=>b-a).indexOf(num)+1);


console.log(solution([3, 76, 24]))