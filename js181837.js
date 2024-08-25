const solution = (order) => 
    order.reduce((result,drink)=>
        drink.includes("cafelatte")?result+5000:result+4500,0)

console.log(solution(["cafelatte", "americanoice", "hotcafelatte", "anything"]))
console.log(solution(["americanoice", "americano", "iceamericano"]))