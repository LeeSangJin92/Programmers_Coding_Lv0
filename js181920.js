// 카운트 업

function solution(start_num, end_num) {
    return [...Array(end_num - start_num + 1)]
            .map((_, index) => start_num + index);
}