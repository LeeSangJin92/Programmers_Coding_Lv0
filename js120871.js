const solution = (n) => {
    let count = 0;
    let result = 0;
    while(n>count||(result+"").includes("3")){
        ++result;
        calculate(result);
        ++count;
    }
    return result;

    function calculate(number){
        if(number%3==0||(result+"").includes("3")) {
            ++result; 
            calculate(result)
        }
    }
}
solution(20);