const solution = (polynomial) => {
    let xArr = polynomial.match(/(\d+)*x/g)
    let xResult = xArr&&xArr.reduce((result,str)=>/\d+/g.test(str)?+str.match(/\d+/g)[0]+result:++result,0)
    let numArr = polynomial.match(/\d+\b/g)
    let numResult = numArr&&numArr.reduce((sum,num)=>sum+ +num,0)
    let result = [];
    xResult&&result.push(xResult==1?"x":xResult+"x");
    numResult&&result.push(numResult);
    return xResult?result.join(' + '):result+""
};

console.log(solution("3x + 7 + x + 2"));
console.log(solution("x + x + x"))
console.log(solution("4 + 6"))