const solution = (numbers) =>Math.max(
    ...numbers.map((num1,index1)=>
        numbers.reduce((result,num2,index2)=>
            index1!=index2?
                num1*num2>result?
                    num1*num2:result:result,(-(10000**2)))));


console.log(solution([100,-100]))
console.log(solution([0, -31, 24, 10, 1, 9]))
console.log(solution([10, 20, 30, 5, 5, 20, 5]	))