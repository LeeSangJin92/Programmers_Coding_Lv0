const solution = (array) => {
    let resultMap = [...new Set(array)].reduce((result,num)=>{
        return {...result,[num]:count(num, array)}},{});
    let countArray = Object.values(resultMap);
    let maxCount = Math.max(...countArray);
    let firstIndex = countArray.indexOf(maxCount);
    let lastIndex = countArray.lastIndexOf(maxCount);
    return firstIndex == lastIndex ? +Object.keys(resultMap)[firstIndex]:-1; 
    };

const count = (num, array) => array.reduce((result, number)=>num==number?++result:result,0);

console.log(solution([1, 2, 3, 3, 3, 4]))