const solution = (dots) => {
  return dots.reduce((result, arr, index, original) => {
    let [a, b, c, d] = [
      arr,
      ...original.filter((_, filterIndex) => filterIndex != index),
    ];
    return Math.abs(a[0] - b[0]) / Math.abs(a[1] - b[1]) ==
      Math.abs(c[0] - d[0]) / Math.abs(c[1] - d[1])
      ? 1
      : result;
  }, 0);
};

console.log(
  solution([
    [1, 4],
    [9, 2],
    [3, 8],
    [11, 6],
  ])
);
console.log(
  solution([
    [3, 5],
    [4, 1],
    [2, 4],
    [5, 10],
  ])
);
console.log(
  solution([
    [1, 2],
    [5, 1],
    [3, 6],
    [6, 3],
  ])
);
console.log(
  solution([
    [1, 1],
    [1, 2],
    [3, 3],
    [4, 1],
  ])
);
