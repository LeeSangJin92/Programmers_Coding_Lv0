//코드 처리하기

function solution(code) {
    
    let list = code.split("");
    let result = '';
    let mod = 0;
    list.forEach((data,index) => {
        if(data == 1) mod = mod == 0 ? 1 : 0;
        else {if(index % 2 == mod) result = result + data;}

    });
    return result==""?"EMPTY":result;
}