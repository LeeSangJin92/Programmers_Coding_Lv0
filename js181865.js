const solution = (binomial) => {
  let data = binomial.split(" ");
  switch (data[1]) {
    case "+":
      return +data[0] + +data[2];
    case "-":
      return data[0] - data[2];
    case "*":
      return data[0] * data[2];
  }
};

// 추가 간결화된 답

// function solution(binomial) {
//     const [a,ex,b] = binomial.split(" ");
//     return (ex === "+")? +a+ +b : (ex === "-")? a - b : a*b
// }

// ⚠️ a + b = 문자열 + 문자열
// ✏️ +a + +b = 연산자(정수) + 연산자(정수) 로 인식함.
