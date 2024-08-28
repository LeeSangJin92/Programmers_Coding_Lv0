const solution = (arr) =>
  arr.reduce(
    (result, list, index) => result.map((data,i)=>index==i?data.map((zero,j)=>list[j]?list[j]:zero):data),
    Array.from({ length: max(arr.length, arr[0].length) }, () =>
      Array(max(arr.length, arr[0].length)).fill(0)
    )
  );

const max = (a, b) => Math.max(a, b);

console.log(
  solution([
    [572, 22, 37],
    [287, 726, 384],
    [85, 137, 292],
    [487, 13, 876],
  ])
);
console.log(
  solution([
    [57, 192, 534, 2],
    [9, 345, 192, 999],
  ])
);
