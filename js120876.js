const solution = (lines) => {

    let count = lines.map(data=>Math.abs((data[0])-(data[1])));
    let lineArr = lines.reduce((result,data,lineIndex)=>[...result,
        ...Array(count[lineIndex]).fill(data[0]).map((num,index)=>num+index)],[]);
    let set = [...new Set(lineArr)]
    return set.reduce((result,num)=>check(num)?++result:result,0);

    function check(number){
        let countNum = 0;
        lineArr.forEach(numberData => {
            if(number==numberData) ++countNum;
        });
        return countNum>=2;
    }
}

    console.log(solution([[0, 2], [-3, -1], [-2, 1]]));
    console.log(solution([[0, 1], [2, 5], [3, 9]]));
    console.log(solution([[-1, 1], [1, 3], [3, 9]]));
    console.log(solution([[0, 5], [3, 9], [1, 10]]));