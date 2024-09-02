const solution = (num, total) => {
    return check(Array(num).fill(0).map((_,index)=>total-index).reverse());

    function check(list){
        if(list.reduce((sum,num)=>sum+num,0)==total){
            return list;
        } else {
            return check(list.map(num=>num-1));
        }
    }
}
console.log(solution(3,12));
console.log(solution(5,5));
console.log(solution(1,0));
console.log(solution(4,14));
console.log(solution(5,15));
console.log(solution(5,15));
console.log(solution(6,21));
console.log(solution(1,1));
console.log(solution(1,2));