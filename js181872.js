function solution(myString, pat) {
    let pattern = new RegExp(`(.*)(${pat})(.*)$`)
    return pattern.exec(myString)[1]+pat;
}

console.log(solution("AAAAaaaass","a"));