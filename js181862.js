const solution = (myStr) => {let result = myStr.split(/[a,b,c]/g).filter(data=>data)
        return result[0]?result:["EMPTY"]
};

// 간결화된 답
// const solution=s=>s.match(/[^a-c]+/g)||['EMPTY']