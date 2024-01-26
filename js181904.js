function solution(my_string, m, c) {

    console.log(my_string.length/m);
    let strArr = [];
    let result = "";

    for(let index = 0;index<my_string.length;index+=m){
        strArr.push(my_string.substring(index,index+m).split(''));
    }
        strArr.forEach((data)=>{
          result = result + data[c-1];
    });
    return result;
}

solution("ihrhbakrfpndopljhygc",4,2)
solution("programmers",1,1)