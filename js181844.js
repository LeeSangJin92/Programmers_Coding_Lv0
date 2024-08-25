const solution = (arr, delete_list) => arr.filter(data=>!delete_list.includes(data));

console.log(solution([293, 1000, 395, 678, 94],[94, 777, 104, 1000, 1, 12]))
