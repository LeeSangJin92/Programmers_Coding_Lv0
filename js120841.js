const solution = ([x,y]) => 
    ((x>0&&y>0)&&1)||
    ((x<0&&y>0)&&2)||
    ((x<0&&y<0)&&3)||
    ((x>0&&y<0)&&4);

console.log(solution([1, 4]))