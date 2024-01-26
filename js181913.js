function solution(my_string, queries) {

    let strArr = my_string.split('');
    queries.forEach(queries => {
        let result=[];
        strArr.forEach((str,index)=>{
            if(index>=queries[0]&&index<=queries[1]) result.splice(queries[0],0,str);
            else result.push(str);
        })
        strArr = result;
    });
    console.log(strArr.join(''))
}

solution("rermgorpsam",[[2, 3]]);