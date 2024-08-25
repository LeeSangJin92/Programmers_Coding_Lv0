const solution = (myString) => [...myString].map(word=>word<'l'?'l':word).join("");

console.log(solution("abcdevwxyz"))