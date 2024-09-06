// reduce 활용
// const solution = (my_string, num1, num2) => [...my_string].reduce((result,word,index,arr)=>result+(index==num1?arr[num2]:index==num2?arr[num1]:word),"");

// 구조분해할당 활용
const solution = (my_string, num1, num2) => {
    let str = [...my_string];
    str[num1], str[num2] = str[num2], str[num1];
    return str.join("");
}

console.log(solution("hello",1,2));
console.log(solution("I love you",3,6));