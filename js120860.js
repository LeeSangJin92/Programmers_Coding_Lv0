const solution = ([p1, p2, p3, p4]) => {
        let lineX = [p1[0], p2[0], p3[0], p4[0]];
        let lineY = [p1[1], p2[1], p3[1], p4[1]];
        let x = Math.max(...lineX)-Math.min(...lineX)
        let y = Math.max(...lineY)-Math.min(...lineY)
        return x*y;
}

console.log(solution([[1, 1], [2, 1], [2, 2], [1, 2]]))
console.log(solution([[-1, -1], [1, 1], [1, -1], [-1, 1]]))