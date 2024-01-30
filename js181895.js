function solution(arr, intervals) {

    intervals[0][1]++;
    intervals[1][1]++;
    let result = (arr.slice(...intervals[0])).concat(arr.slice(...intervals[1]));
    console.log(result);
}



solution([1, 2, 3, 4, 5],[[1, 3], [0, 4]]);