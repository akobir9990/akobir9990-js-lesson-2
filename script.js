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
      `Massivdagi eng qisqa element bu: ${
        arr[shortName.indexOf(Math.min(...shortName))]
      } va unda  ${Math.min(...shortName)} bit ma'lumot bor`
    );
  }
}

3 === 3
  ? console.log("your are god of mental arithmetic")
  : console.log("you are looser ;) ");

// problems

let a = 3,
  b = 7,
  c = 9,
  d = 10;

a > 0
  ? console.log("da a musbat ekan rostanam")
  : console.log("yoq a musbat emas ekan");

!a % 2 == 0 ? console.log("toq ekan") : console.log("toq emas ekan ");
a % 2 == 0 ? console.log("toq emas ekan") : console.log("toq ekan ");

a > 0 && b > 0
  ? console.log("da a ham b ham 0 dan katta ")
  : console.log("yooq qaysidir biri kichkinaaa 0dan");

a > b && b > c
  ? console.log("a b dan katta b bo'lsa c dan katta  ")
  : console.log("chotta nimadir netto SHART QANOATLANTIRILMADI");

b > a && b < c
  ? console.log("b a va c ni orasida ")
  : console.log("b chota boshqa joydaa a va c ni orasida emaas");

a % 2 != 0 && b % 2 != 0
  ? console.log("a va b toq sonlar ")
  : console.log("yoki a yoki b juft");

a > 0 && b > 0 && c > 0 && d > 0
  ? console.log("DA a,b,c,d musbat sonlar")
  : console.log("a,b,c,d lardan qaysidir biri musbat emaas");

a > 0 || b > 0 || c > 0
  ? console.log("DA a,b,c sonlardan kamida ikkitasi musbat")
  : console.log("a,b,c lardan qaysidir biri musbat emaas");

let week = {
  dushanba: 1,
  seshanba: 2,
  chorshanba: 3,
  payshanba: 4,
  juma: 5,
  shanba: 6,
  yakshanba: 7,
};

week.dushanba == 1
  ? console.log("ha dushnaba edi 1- raqamda")
  : console.log("you are looser");

let telCompamyes = {
  mobiUz: 97,
  uzmobile: 99,
  ucell: 93,
  beeline: 91,
};

telCompamyes.ucell == 93
  ? console.log("ha ucell edi")
  : console.log(`yoq 93 ucell emas`);
