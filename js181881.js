function solution(arr) {
    let result = arr;
    let count = 0;
    calculate(arr)
    while(!(JSON.stringify(arr)===JSON.stringify(result))){
        calculate(arr);
    }
    return count-1;

    function calculate(list){
        count = count+1
        result = arr;
        arr = list.map(data=>{
            if(data>=50&&data%2===0) return data/2;
            else if(data<50&&data%2==1) return data*2+1
            else return data;
        });
    }
}

console.log(solution([1, 2, 3, 100, 99, 98]))