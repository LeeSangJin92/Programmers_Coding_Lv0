const solution = (my_string) => my_string.match(/\d/g).map(num=>+num).sort();

console.log(solution("hi12392"))
console.log(solution("p2o4i8gj2"))