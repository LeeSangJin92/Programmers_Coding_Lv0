const solution = (num_str) =>
  [...num_str].reduce((result, num) => result + +num, 0);

console.log(solution("123456789"));
