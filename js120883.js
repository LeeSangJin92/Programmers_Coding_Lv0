const solution = (id_pw, db) => {
    let index = db.map(data=>data[0]).indexOf(id_pw[0]);
    if(index==-1) return "fail";
    if(db[index][1]!==id_pw[1]) return "wrong pw";
    return "login";
}

// function solution(id_pw, db) {
//   const [id, pw] = id_pw;
//   const map = new Map(db);
//   return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
// }


console.log(solution(["meosseugi", "1234"],[["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"]]));
console.log(solution(["programmer01", "15789"],[["programmer02", "111111"], ["programmer00", "134"], ["programmer01", "1145"]]));
console.log(solution(["rabbit04", "98761"],[["jaja11", "98761"], ["krong0313", "29440"], ["rabbit00", "111333"]]))