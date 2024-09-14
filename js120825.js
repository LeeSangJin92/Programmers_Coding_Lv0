const solution = (my_string, n) => [...my_string].map(str=>str.repeat(n)).join("");

console.log(solution("hello",3))