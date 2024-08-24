const solution = (arr1, arr2) => {

    const sum = (data) => {return data.reduce((result, num)=>num + result,0);}

    return arr1.length===arr2.length?
        Math.sign(sum(arr1)-sum(arr2)):
        Math.sign(arr1.length-arr2.length);
}

console.log(solution([100, 17, 84, 1],[55, 12, 65, 36]))