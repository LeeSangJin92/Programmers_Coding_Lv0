function solution(myString) {
  let words = myString.split("");
  return words.map((data)=>{
    if(data==='a'||data==='A') return data.toUpperCase();
    else return data.toLowerCase();
  }).join('');
}

console.log(solution("abstract algebra"));