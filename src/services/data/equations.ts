const generateFirstDegreeEquation = (difficulty: number) => {
    //a should be != 0    
    const a = generateRandomInt(6, 1);
    const b = generateRandomInt(15, 1);    
    const y = generateRandomInt(15, 1);    
    
    const x = solveFirstDegreeEquation(a, b, y);

    return {
        a,
        b,
        y,
        'solution': x,
        'presentation': `${a}x ${b>0 ? '+' : '-'} ${Math.abs(b)} = ${y}`,
    };
}

const generateRandomInt= (max: number, min: number) => {
    return (Math.floor(Math.random() *(max - min + 1)) + min)
    * (generateOddOrEven() > 1 ? 1 : -1);
}

const generateOddOrEven = () => Math.floor(Math.random() * 2) + 1;

const solveFirstDegreeEquation = (a: number, b: number, y: number) => {
    const x = (y - b) / a;    
    return x;
}

export {
    generateFirstDegreeEquation,
}