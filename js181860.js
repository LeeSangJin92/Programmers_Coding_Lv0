const solution = (arr, flag) =>
  flag.reduce(
    (result, bool, index) =>
      bool
        ? [...result, ...Array(arr[index] * 2).fill(arr[index])]
        : result.filter((data, num) => num < result.length - arr[[index]]),
    []
  );
console.log(solution([3, 2, 4, 1, 3], [true, false, true, false, false]));
