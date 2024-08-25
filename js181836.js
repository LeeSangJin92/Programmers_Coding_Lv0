const solution = (picture, k) => 
    picture.reduce((result, str)=>
        [...result,...Array(k).fill([...str].map(word=>
            word.repeat(k)).join(""))],[])

console.log(solution([".xx...xx.", "x..x.x..x", "x...x...x", ".x.....x.", "..x...x..", "...x.x...", "....x...."],2))
console.log(solution(["x.x", ".x.", "x.x"],3));