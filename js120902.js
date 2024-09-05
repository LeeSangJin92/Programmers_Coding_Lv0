// ⚠️ eval 함수는 사용하지 않는 편이 좋다.

// const solution = (my_string) => eval(my_string);

const solution = (my_string) => my_string.split(" ").join("").match(/\W*[\d]+/g).reduce((result,num)=>result+= +num,0);

console.log(solution("13 + 1 + 4"))