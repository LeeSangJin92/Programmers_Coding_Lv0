const solution = (score) => {
    let scoreList = score.map(data => (data[0]+data[1])/2);
    return scoreList.map(data => [...scoreList].sort((a,b)=>b-a).indexOf(data)+1);
}






console.log(solution([[80, 70], [90, 50], [40, 70], [50, 80]]))