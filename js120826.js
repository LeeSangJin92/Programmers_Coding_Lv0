// const solution = (my_string, letter) => [...my_string].filter(word=>word!==letter).join('');
const solution = (my_string, letter) => my_string.replaceAll(letter,"");

console.log(solution("abcdef","f"))
console.log(solution("BCBdbe","B"))