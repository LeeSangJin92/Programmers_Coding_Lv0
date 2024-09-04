const solution = (my_str, n) => [...my_str].reduce((result,word,index)=>{
    let num = (Math.floor(index/n));
    result[num] = result[num] + word
    return result;
},Array(Math.ceil(my_str.length/n)).fill(""))

console.log(solution("abc1Addfggg4556b",5))
console.log(solution("abcdef123",3))