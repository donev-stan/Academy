const solve = (colors) => Math.min(...Object.values(colors));

const shouldBe8 = solve({ cyan: 8, magenta: 22, yellow: 10 });
const shouldBe55 = solve({ cyan: 100, magenta: 400, yellow: 55 });

console.log(shouldBe8);
console.log(shouldBe55);
