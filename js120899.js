// const solution = (array) => [Math.max(...array),array.indexOf(Math.max(...array))]
const solution = (array) => array.reduce((result,num,index) => result[0]==num?[result[0],index]:result,[Math.max(...array),0])

console.log(solution([1,8,3]))