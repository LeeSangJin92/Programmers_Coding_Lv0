const solution = (arr) => arr.reduce((result,list,arrIndex)=>
    list.reduce((result,num,listIndex)=>num===arr[listIndex][arrIndex]?result:0,result),1);


console.log(solution([[5, 192, 33], [192, 72, 95], [33, 95, 999]]))
console.log(solution([[19, 498, 258, 587], [63, 93, 7, 754], [258, 7, 1000, 723], [587, 754, 723, 81]]))