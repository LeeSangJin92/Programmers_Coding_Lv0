const solution = (board, k) =>
  [].concat(...board.map((list, indexI) =>
        list.filter((_, indexJ) => indexI + indexJ <= k)
      )).reduce((result, num) => result + num);

console.log(
  solution(
    [
      [0, 1, 2],
      [1, 2, 3],
      [2, 3, 4],
      [3, 4, 5],
    ],
    2
  )
);
