const solution = (array, height) => array.filter(num => num>height).length;

console.log(solution([149, 180, 192, 170], 167))