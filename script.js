let students = [
  {
    name: "Ali",
    score: 44,
  },
  {
    name: "Vali",
    score: 43,
  },
  {
    name: "Gani",
    score: 49,
  },
  {
    name: "Kani",
    score: 55,
  },
];

function maslahatchi(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].score < 45) {
      console.log(`${arr[i].name}  failed your result is: ${arr[i].score}`);
    }
    if (arr[i].score > 45) {
      console.log(`${arr[i].name} passed your result is: ${arr[i].score}`);
    }
  }
}

maslahatchi(students);

let arr = ["ALISHER", "AHMAD", "TOSHMAT", "ALI"];

for (let shortName = [], i = 0; i < arr.length; i++) {
  shortName.push(arr[i].length);
  if (i == arr.length - 1) {
    console.log(
      `Massivdagi eng qisqa element bu: ${arr[i]} va unda  ${Math.min(
        ...shortName
      )} bit ma'lumot bor`
    );
  }
}

3 === 3
  ? console.log("your are god of mental arithmetic")
  : console.log("you are looser ;) ");
