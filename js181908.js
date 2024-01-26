function solution(my_string, is_suffix) {
    let result = [];
    for(let i=97;i<=122;i++){
        let word = String.fromCharCode(i);
        if(my_string.includes(word)){
            for(let index = my_string.length-1;index>=0;index--){
                if(my_string.substring(index,index+1)==word){
                        console.log(my_string.substring(index))
                        let str = my_string.substring(index);
                        if(!result.includes(str))result.push(str);
                }
            }
        }
    }
    return result.sort().includes(is_suffix)?1:0;   
}
