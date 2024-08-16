function solution(todo_list, finished) {
    return todo_list.filter((data,index)=>{
      if(!finished[index]) return data;  
    })
}