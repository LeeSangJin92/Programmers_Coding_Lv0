const solution = (numbers, direction) => {
    direction=="left"&&numbers.push(numbers.shift()); 
    direction=="right"&&numbers.unshift(numbers.pop());
    return numbers
};

console.log(solution([4, 455, 6, 4, -1, 45, 6],"left"))