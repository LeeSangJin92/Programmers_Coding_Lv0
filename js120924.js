const solution = (common) => {
    let num = common[1] - common[0];
    if(common[2]-common[1]===num) return common.pop()+num;
    else return common.pop()*(common[1]/common[0]);
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([2, 4, 8]));
console.log(solution([2, 4, 6]));
console.log(solution([3, 12, 48]));