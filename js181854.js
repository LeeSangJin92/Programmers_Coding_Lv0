const solution = (arr, n) =>
  arr.map((num, index) =>
    arr.length % 2 === 0
      ? index % 2 !== 0
        ? num + n
        : num
      : index % 2 === 0
      ? num + n
      : num
  );

console.log(solution([49, 12, 100, 276, 33], 27));
