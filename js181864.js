const solution = (myString, pat) => {
  return myString
    .split("")
    .reduce((str1, str2) => {
      str1.push(str2 === "A" ? "B" : "A");
      return str1;
    }, [])
    .join("")
    .includes(pat)
    ? 1
    : 0;
};

console.log(solution({ myString: "ABBAA", pat: "AABB" }));

// 간결화된 답

// const solution = (myString, pat) => [...myString].map(v => v === 'A' ? 'B' : 'A').join('').includes(pat) ? 1 : 0
