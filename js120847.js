const solution = (numbers) => numbers.sort((a,b)=>a-b)&&(numbers.pop()*numbers.pop());

console.log(solution([0, 31, 24, 10, 1, 9]));