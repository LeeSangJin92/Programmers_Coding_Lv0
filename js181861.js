const solution = arr => arr.reduce((result,num)=>[...result,...Array(num).fill(num)],[]);

console.log(solution([5, 1, 4]));