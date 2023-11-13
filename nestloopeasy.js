// first square

let num = 5;
for (let i = 0; i < num; i++) {
  let star = "";
  for (let m = 0; m < num; m++) {
    star += " *";
  }
  console.log(star);
}

// dundaa odtoi square
console.log("task2");
let mid = 3;

for (let i = 0; i < num; i++) {
  let star1 = "";
  for (let m = 0; m < num; m++) {
    if (m == 3 && i == 3) {
      star1 += " +";
    } else {
      star1 += " *";
    }
  }
  console.log(star1);
}
