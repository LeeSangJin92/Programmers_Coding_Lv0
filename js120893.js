const solution = (my_string) => [...my_string].map(word=>/[A-Z]/.test(word)?word.toLowerCase():word.toUpperCase()).join('');

console.log(solution("cccCCC"))