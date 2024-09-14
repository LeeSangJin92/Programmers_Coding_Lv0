const solution = (num_list) => num_list.reduce(([even, odd],num)=>num%2==0?[++even,odd]:[even,++odd],[0,0])

console.log(solution([1, 2, 3, 4, 5]))