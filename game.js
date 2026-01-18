let boxes = document.querySelectorAll(".box");
let resetbox = document.querySelector(".resetbox");
let msg = document.querySelector(".msg");
let container = document.querySelector(".container");
let newbox = document.querySelector(".newbox");
let darkmode = document.querySelector(".mode");
let lightmode = document.querySelector(".lightmode");
let body = document.querySelector("body");
let play = document.querySelector(".play");
let container2 = document.querySelector(".container2");
let container3 = document.querySelector(".container3");
const clickSound = new Audio("./sounds/click.mp3");
const xSound = new Audio("./sounds/x.mp3");
const oSound = new Audio("./sounds/0.mp3");

const removePlay=()=>{
  container2.style.display = "none";
  container3.classList.remove("hide3");
  resetbox.classList.remove("hide4");
  play2.style.display = "none";
  clickSound.play();

};

play.addEventListener("click", removePlay);


darkmode.innerText = "Switch to Dark Mode 🌙";
currentmode = "dark";

let turn0 = true;

const wincode = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "X";
      turn0 = false;
      box.disabled = true;
      box.style.color = "#780000";
      xSound.play();
    } else {
      box.innerText = "0";
      turn0 = true;
      box.disabled = true;
      box.style.color = "#1976d2";
      oSound.play();
    }
    checkWinner();
  });
});

const showWinner = (winner) => {
  container.classList.remove("hide");
  msg.innerText = `Congratulations Winner is ${winner}`;
  disableboxes();
};

const disableboxes = () => {
  boxes.forEach((box) => {
    
    box.disabled = true;
  });
};


let winnerFound = false;

const checkWinner = () => {
  for (let pattern of wincode) {
    let patt1 = boxes[pattern[0]].innerText;
    let patt2 = boxes[pattern[1]].innerText;
    let patt3 = boxes[pattern[2]].innerText;

    if (patt1 != "" && patt2 != "" && patt3 != "") {
      if (patt1 === patt2 && patt2 === patt3) {
        winnerFound = true;
        console.log(`Congrats ${patt1} is Winner`);
        showWinner(patt1);
      }
    }
  }
};

resetbox.addEventListener("click", () => {
  turn0 = true;
  enableboxes();
});

newbox.addEventListener("click", () => {
  turn0 = true;
  enableboxes();
});

const Dmode = () => {
  if (darkmode.innerText === "Switch to Dark Mode 🌙") {
    darkmode.innerText = "Switch to Light Mode ☀️";
    body.style.backgroundColor = "black";
    boxes.forEach((box) => {
      box.style.backgroundColor = "#6c757d";
    });
     crates.forEach((crate) => {
      crate.style.backgroundColor = "#6c757d";
    });
    darkmode.style.backgroundColor = "white";
    darkmode.style.color = "black";
    msg.style.color = "#f7f7f2";
    scoreShow.style.color = "white";
  } else {
    darkmode.innerText = "Switch to Dark Mode 🌙";
    body.style.backgroundColor = "white";
    scoreShow.style.color = "black";
    boxes.forEach((box) => {
      box.style.backgroundColor = "#ef233c";
      });
      
    darkmode.style.backgroundColor = "black";
    darkmode.style.color = "white";
    msg.style.color = "#ef233c";
  }
};

darkmode.addEventListener("click", () => {
  Dmode();
});

let i = 0;
const drawCheck = () => {
  let i = 0;

  boxes.forEach((box) => {
    if (box.innerText !== "") {
      i++;
    }
  });
  if (i === 9 && winnerFound === false) {
    container.classList.remove("hide");
    msg.innerText = "Draw";
  }
};

addEventListener("click", drawCheck);


const enableboxes = () => {
  winnerFound = false; 
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
  container.classList.add("hide");
};


addEventListener("click", drawCheck);




// ------game 2 MINES---------

let crates = document.querySelectorAll(".crate");
let play2 = document.querySelector(".play2");
let pack = document.querySelector(".pack");
let resetMine = document.querySelector(".resetmine");
let gembox = document.querySelector(".gembox");
let scoreShow = document.querySelector(".vault");
const collectSound = new Audio("./sounds/collect.mp3");
const diaSound = new Audio("./sounds/dia.mp3");
const bombSound = new Audio("./sounds/faaah.mp3");


const enableCrate = () =>{
  crates.forEach((crate)=>{
  crate.disabled=false;
});
};

const disableCrate = () =>{
  crates.forEach((crate)=>{
  crate.disabled=true;
});
};


resetMine.addEventListener("click", () => {


  if (resetMine.innerText.includes("COLLECT")) {
        collectSound.play();
        
      }
  
  
  crates.forEach((crate) => {
    crate.innerText = "";
    crate.style.filter = "";
    crate.style.backgroundColor = ""; 
    crate.style.backgroundColor = ""; 
    crate.style.boxShadow = "";
    crate.classList.remove("flip-anim");   
  });


  resetMine.innerText = "COLLECT";
  resetMine.style.backgroundColor = "chartreuse";
  
  
  enableCrate();
});

let diaCount = 0;
let xvalue = 0;

const stakes = () => {
  const value= [                                     
    1,
    100,  // 1st Diamond
    150,  // 2nd
    250,  // 3rd
    400, // 4th
    600, // 5th
    900, // 6th
    1300, //7th
    1900, // 8th
    2800, // 9th
  ];
  return value[diaCount];
}

const xValues=()=>{
const multipliers = [
    "1.00x",  
    "1.50x",  
    "2.50x",  
    "4.00x",  
    "6.00x",  
    "9.00x",  
    "13.00x", 
    "19.00x", 
    "28.00x", 
    "42.00x"  
];
 return multipliers[xvalue];
}


const score = () => {
  let result = stakes();
  let vault = 1;
  let finalResult = vault*result;
  return finalResult;
}



// crates.forEach((crate)=>{
//  resetMine.addEventListener("click", (e)=>{
//   crate.innerText = "";
//   resetMine.innerText="COLLECT";
//   resetMine.style.backgroundColor = "chartreuse";
//   crate.style.filter = "";
//     console.log("A box was clicked!"); 
//     const result = showCard();
//     console.log("Random Result:", result); 
//     console.log("Element Clicked:", e.target);
//     enableCrate();
//  })

// });
// this created 25 separate listeners on that single Reset button


play2.addEventListener("click", ()=>{
  play2.style.display = "none";
  container2.style.display = "none";
  pack.classList.remove("hide5");
  resetMine.classList.remove("hide6");
  gembox.classList.remove("hide7");
  clickSound.play();
});


const showCard = () => {
  const randomIdx = Math.floor(Math.random()*5);
  return randomIdx;
};


crates.forEach((crate) => {
  crate.addEventListener("click", () => {
    
    const result = showCard();
    
    crate.classList.add("flip-anim");

    if (result === 0 || result === 1 || result === 2) {
      console.log("dia");
      crate.innerText = "💎";
      crate.disabled = true;
      diaSound.play();
      stakes();
      xValues();
      diaCount++;
      xvalue++;
      console.log(diaCount);
      console.log(stakes());
      score();
      console.log(score());
      scoreShow.innerText = `VAULT : ${score()}💎 (NEXT: ${xValues()})`;
      
    } else {
      console.log("bomb");
      crate.style.filter = "none";
      crate.style.backgroundColor = "#ff0000"; 
      crate.style.boxShadow = "0 0 20px #ff0000";
      crate.innerText = "💣";
      crate.disabled = true;
      resetMine.innerText = "RESET";
      resetMine.style.fontWeight = "bold";
      resetMine.style.backgroundColor = "#f04c4c";
      diaCount = 0;
      xvalue = 0;
      disableCrate();
      bombSound.play();
      scoreShow.innerText = "VAULT : 0💎";
    }
  });
});





