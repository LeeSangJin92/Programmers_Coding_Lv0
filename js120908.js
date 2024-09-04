const solution = (str1, str2) => RegExp(`.*${str2.toUpperCase()}+`).test(str1.toUpperCase())?1:2;

console.log(solution("ab6CDE443fgh22iJKlmn1o","6CD"))