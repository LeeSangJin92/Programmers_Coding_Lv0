const solution = (i, j, k) => [...Array(1+j-i).fill(i).map((num,index)=>num+index).join('')].filter(num=>RegExp(k,"g").test(num)).length

console.log(solution(1,4,5))