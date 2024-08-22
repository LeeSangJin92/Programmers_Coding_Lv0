const solution = (rny_string) => {
    return [...rny_string].map((word)=>word==="m"?"rn":word).join('');
}

console.log(solution("masterpiece"));