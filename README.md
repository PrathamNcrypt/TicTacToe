<img width="1371" height="855" alt="Screenshot 2026-01-18 162518" src="https://github.com/user-attachments/assets/bbe740b2-3859-427e-9247-e63274927b83" />



#  Game Hub: Mines & Tic-Tac-Toe



> My first major JavaScript project after finishing my 1st Semester of engineering. A Game Hub featuring **Tic-Tac-Toe** and a stake-based **Mines** game.

🔗 **[Play the Live Demo](https://prathamncrypt.github.io/CrateAndCross/)**

---


This project helped me understand how to manage **game states**, handle **DOM manipulation**, and use **basic DSA** (2D Arrays) in a practical way.

Features
* **Mines Game:** A clone of the popular betting game. Uses `Math.random()` to randomize bomb locations and calculates multipliers in real-time.
* **Tic-Tac-Toe:** Classic game with win/draw detection system.
* **Dark/Light Mode:** A dynamic theme engine that updates every single game grid instantly.
* **Audio:** Sound effects for clicks, wins, and explosions.

---

The "Draw" Logic Challenge
The hardest part of this project was fixing a bug in Tic-Tac-Toe where the game would declare a "Draw" even if the last move was a win.

**My Solution:**
I separated the logic into a strict priority:
1.  Check for a Winner first.
2.  Only check for a Draw if the grid is full (`count === 9`) **AND** `winnerFound` is still `false`.

3. <img width="585" height="558" alt="Screenshot 2026-01-18 161006" src="https://github.com/user-attachments/assets/5600ddb8-4a4c-4ff9-babb-4070b21db68d" />


```javascript
```javascript
// The fix that solved it
if (filledCount === 9 && winnerFound === false) {
    msg.innerText = "Draw";
}





