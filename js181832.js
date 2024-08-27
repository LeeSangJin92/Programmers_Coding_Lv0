const solution = (n) => {
  let maxRow = n - 1;
  let minRow = 0;
  let row = 0;
  let maxCol = 0;
  let minCol = 0;
  let col = 0;
  let revers = false;
  let numbers = Array.from({ length: n ** 2 }, (_, index) => index + 1);
  let result = Array.from({ length: n }, () => Array(n).fill(0));
  numbers.forEach((number) => {
    if (!revers) {
      if (row <= maxRow && col <= maxCol) {
        result[col][row] = number;
        row <= maxRow ? row++ : row;
        if (row > maxRow) {
          maxCol = maxRow;
          row--;
          col <= maxCol ? col++ : col;
        }
        if (row == maxRow && col > maxCol) {
          revers = !revers;
          col-- && maxRow-- && minCol++;
          row = --row;
        }
      }
    } else {
      if (row >= minRow && col >= minCol) {
        result[col][row] = number;
        row >= minRow ? --row : row;
        if (row < minRow) {
          row++;
          col >= minCol ? col-- : col;
        }
        if (row == minRow && col < minCol) {
          revers = !revers;
          col++ && maxCol--;
          minRow = ++minRow;
          row = ++row;
        }
      }
    }
  });
  return result;
};

console.log(solution(4));
