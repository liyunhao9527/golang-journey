let score = 10;
let copied = score;
const box = { value: score };
const alias = box;
alias.value = 20;
console.log(score, copied, box.value);
