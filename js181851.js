
// const solution = (rank, attendance) => {
//     let list = rank.filter((num,index)=>attendance[index]).sort((a,b)=>a-b).slice(0,3);
//     return 10000*rank.indexOf(list[0])+100*rank.indexOf(list[1])+rank.indexOf(list[2]);
// }   

const solution = (rank, attendance) => 
    rank
        .map((num, index) => [num, index])
        .filter(([_, index]) => attendance[index])
        .sort(([a], [b]) => a - b)
        .slice(0, 3)
        .reduce((result, [_, index], i) => result + index * 10 ** (4 - 2 * i), 0);
// 10000 × a + 100 × b + c

console.log(solution([3, 7, 2, 5, 4, 6, 1],[false, true, true, true, true, false, false]))