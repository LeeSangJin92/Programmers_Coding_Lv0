const solution = (rsp) => [...rsp].map(str=> 
    (str=='0'&&'5')||
    (str=='2'&&'0')||
    (str=='5'&&'2')
).join('');

console.log(solution("205"))