// "aya", "ye", "woo", "ma"

const solution = (babbling) =>
  babbling.reduce((result, word) => {
    let check = /^(?!.*\b(aya|ye|woo|ma)+\b).+$/;
    if (!check.test(word)) return result + 1;
    else return result;
  }, 0);

// 정답 : 1
console.log(solution(["aya", "yee", "u", "maa", "wyeoo"]));
// 정답 : 3
console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]));
