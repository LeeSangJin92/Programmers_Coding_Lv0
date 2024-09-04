const solution = (array) => [...array.join("")].reduce((result,word)=>word=='7'?++result:result,0);


console.log(solution([7, 77, 17]));