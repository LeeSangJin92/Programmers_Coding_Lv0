const solution = (control, [boardX, boardY]) => {
  let mapX = Math.round(boardX / 2 - 1);
  let mapY = Math.round(boardY / 2 - 1);

  return control.reduce(
    (result, input) => {
      switch (input) {
        case "left":
          result = [result[0]-1>-mapX?result[0]-1:-mapX,result[1]];
          break;
        case "right":
          result = [result[0]+1<mapX?result[0]+1:mapX,result[1]];
          break;
        case "up":
          result = [result[0],result[1]+1<mapY?result[1]+1:mapY];
          break;
        case "down":
          result = [result[0],result[1]-1>-mapY?result[1]-1:-mapY];
          break;
      }
      
      return result;
    },
    [0, 0]
  );
};

console.log(solution(["left", "right", "up", "left", "left", "left", "left"], [5, 5]));
// console.log(solution(["left", "right", "up", "right", "right"], [11, 11]));
