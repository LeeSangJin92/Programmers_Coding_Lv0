const solution = ([a,b,c,d]) => a.reduce((result,_,index)=>
    (a[index]-b[index])-(c[index]-d[index])==0?1:result,0);

console.log(solution([[2, 4], [9, 2], [3, 8], [11, 6]]));
console.log(solution([[3, 5], [4, 1], [2, 4], [5, 10]]));
console.log(solution([[1, 2], [5, 1], [3, 6], [6, 3]]));

console.log((2-9)-(3-11))
console.log((2-9))
console.log((3-11))
// 2, 9, 3, 11
// 4, 2, 8, 6