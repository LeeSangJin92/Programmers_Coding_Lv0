const solution = (hp) => {

    let ant1 = Math.floor(hp/5);
    let ant2 = Math.floor((hp%5)/3);

    return ant1 + ant2 + (hp-(ant1*5+ant2*3))
}

console.log(solution(24));