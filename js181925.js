// 수 조작하기 2

function solution(numLog) {
    let result = "";
    numLog.forEach((data,index) => {
        if(index!=numLog.length-1){
        switch(numLog[index+1]-data){
            case 1 :
                result = textAdd(result,"w");
                break;
            case -1 :
                result = textAdd(result,"s");
                break;
            case 10 :
                result = textAdd(result,"d");
                break;
            case -10 :
                result = textAdd(result,"a");
            }
        }
    });

    return result;
}

function textAdd(result, word){
    return result + word;
}