const solution = (myString) => {
  return myString
    .split("x")
    .filter((data) => data)
    .sort();
};

console.log(solution("dxccxbbbxaaaa"));
