const solution = (array) => array.sort((a,b)=>a-b)[Math.floor(array.length/2)];

console.log(solution([9, -1, 0]));