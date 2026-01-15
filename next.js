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

const removePlay=()=>{
  container2.style.display = "none";
  container3.classList.remove("hide3")
  resetbox.classList.remove("hide4")
};

play.addEventListener("click", removePlay);


darkmode.innerText = "Mode : Dark Mode";
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
    } else {
      box.innerText = "0";
      turn0 = true;
      box.disabled = true;
      box.style.color = "#1976d2";
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

// const enableboxes = () => {
//   boxes.forEach((box) => {
//     box.disabled = false;
//     box.innerText = "";
//   });
//   container.classList.add("hide");
// };

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
  if (darkmode.innerText === "Mode : Dark Mode") {
    darkmode.innerText = "Mode : Light Mode";
    body.style.backgroundColor = "black";
    boxes.forEach((box) => {
      box.style.backgroundColor = "#6c757d";
    });
    darkmode.style.backgroundColor = "white";
    darkmode.style.color = "black";
    msg.style.color = "#f7f7f2";
  } else {
    darkmode.innerText = "Mode : Dark Mode";
    body.style.backgroundColor = "white";
    boxes.forEach((box) => {
      box.style.backgroundColor = "#ef233c";
      //   if(box.innerText = "X"){
      //     box.forEach.style.color = "white";

      // }else{
      //   box.style.color = "#00a7e1";
      // }
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

// const checkWinner2 = () => {
//   for (let pattern of wincode) {
//     let patt1 = boxes[pattern[0]].innerText;
//     let patt2 = boxes[pattern[1]].innerText;
//     let patt3 = boxes[pattern[2]].innerText;

//       if (patt1 !== patt2 || patt2 !== patt3 || patt3 !== patt1) {
//  container.classList.remove("hide");
//  msg.innerText = "Draw";
//       }

//      else if(patt1 === patt2 && patt2 === patt3) {
//         console.log(`Congrats ${patt1} is Winner`);
//         showWinner(patt1);

//   };
// };
// };
const enableboxes = () => {
  winnerFound = false; 
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
  container.classList.add("hide");
};


addEventListener("click", drawCheck);
