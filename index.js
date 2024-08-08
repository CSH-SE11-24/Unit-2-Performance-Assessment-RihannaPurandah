const prompt = require('prompt-sync')()

const welcome = "Welcome to Anime Trivia! This game will test your knowlegde on animes you may or may have not seen. Your point system will start at 0 and every question you get right will add one point. But here's the catch, if you get at least three questions right in a row you earn two point. Enjoy!"
console.log(welcome)
// This array called questions is holding all the objects that with hold the keys; the name of the question, answer choices and the answer. Along with the hint given once entered hint while picking a answer choice.
let questions = [
  {
    name: "Who is the main character in The Plunderer?",
    hint: "He's been in a coma for a while.",
    answerchoice1: "A)Licht",
    answerchoice2: "B)Jail",
    answerchoice3: "C)Tsukina",
    answerchoice4: "D)Suda",
    answer: "A"
  },
  {
    name: "What titan can Zeke and Armin turn into?",
    hint: "One of them can talk and the other can destroy an entire part of a city with their transformation.",
    answerchoice1: "A)Beast and Warhammer Titan",
    answerchoice2: "B)Cart and Colossus Titan",
    answerchoice3: "C)Attack and Female Titan",
    answerchoice4: "D)Beast and Colossus Titan",
    answer: "D"
  },
  {
    name: "Who is the strongest in Bofuri?",
    hint: "She has hiddens powers and a pet turtle.",
    answerchoice1: "A)Sally",
    answerchoice2: "B)Kuromu",
    answerchoice3: "C)Maple",
    answerchoice4: "D)Kanadae",
    answer: "C"
  },
  {
    name: "Whos is Yukio and Rin's father?",
    hint: "He's possesses a preist.",
    answerchoice1: "A)Shiro",
    answerchoice2: "B)Satan",
    answerchoice3: "C)Mephisto",
    answerchoice4: "D)Shima",
    answer: "B"
  },
  {
    name: "In God Eater, what are the monsters called in general?",
    hint: "There are different types but they all have a general name.",
    answerchoice1: "A)Night Hollow",
    answerchoice2: "B)Zygote",
    answerchoice3: "C)Hunters",
    answerchoice4: "D)Aragamis",
    answer: "D"
  },
  {
    name: "What is Eren Jeager's goal?",
    hint: "He's wanted this from since he watched his mother died.",
    answerchoice1: "A)revenge on titans",
    answerchoice2: "B)Go outside the walls",
    answerchoice3: "C)Get freedom",
    answerchoice4: "D)All of the above",
    answer: "D"
  },
  {
    name: "Who is Ciel's butler",
    hint: "He's a demon and has black hair.",
    answerchoice1: "A)Agni",
    answerchoice2: "B)Sebastian",
    answerchoice3: "C)Grell",
    answerchoice4: "D)Carter",
    answer: "B"
  },
  {
    name: "Who is the wing spiker in Haikyuu?",
    hint: "He has orange hair.",
    answerchoice1: "A)Hinata",
    answerchoice2: "B)Kageyama",
    answerchoice3: "C)Kenma",
    answerchoice4: "D)Tuskishima",
    answer: "A"
  },
  {
    name: "",
    hint: "",
    answerchoice1: "A)",
    answerchoice2: "B)",
    answerchoice3: "C)",
    answerchoice4: "D)",
    answer: ""
  },
  {
    name: "",
    hint: "",
    answerchoice: "A)",
    answerchoice2: "B)",
    answerchoice3: "C)",
    answerchoice4: "D)",
    answer: ""
  },
];

//This user input will ask for the user's name and once entered it will output the welcomept2 and ask if the user wants to play or practice. 

let user1 = prompt("Enter name here: ")

const welcomept2 = `Alright ${user1}, down below it will ask you to play or to practice. Enter Which one you wanna do.`
console.log(welcomept2)

user1 = prompt("Enter play or practice: ")
// This function is with holding the questions that can be outputted once the user types play. it will also include the practice question if entered practice. This functions is holding all the conditionals. 
function playround(question) {
  console.log(question.name);
  console.log(question.answerchoice1);
  console.log(question.answerchoice2);
  console.log(question.answerchoice3);
  console.log(question.answerchoice4);
  user1 = prompt("Do you think its A, B, C, or D(Type hint if you need a hint):")
  if (user1 == "hint") {
    console.log(question.hint)
    user1 = prompt("Do you think its A, B, C, or D:")
  }
  if (user1 == question.answer) {
    console.log("Correct! :)");
  } else {
    console.log("Wrong :(")
  }
}
while (user1) {
  if (user1 == "play") {
    for (let i = 0; i <= 9; i++) {
      let result = playround(questions[i])
    }
  } else if (user1 == "practice") {
    console.log("Here is where you will get a general idea of the game with a practice question");
    let practiceQuestion = {
      name: "What is 2+2?",
      answerchoice1: "A)3",
      answerchoice2: "B)10",
      answerchoice3: "C)1",
      answerchoice4: "D)4",
      answer: "4"
    }
    playround(practiceQuestion);
  } else {
    console.log("Enter one of the choices given.")
  }
}
