# Rock Paper Scissors Game 

Simple **Rock Paper Scissors** game built with **Next.js + React + TypeScript**.  
Compete against the computer in **3 rounds**. First to **2 points** wins.

---

## Rules

- Maximum **3 rounds**.
- First to **2 points** wins immediately.
- Equal score after round 3 → **Draw**.

---

## How to Play

1. Choose **Rock**, **Paper**, or **Scissors** by clicking an icon.  
2. The computer will make a random choice using **`Math.random()`**.  
3. The winner of the round is determined based on standard rules:
   - Rock beats Scissors
   - Paper beats Rock
   - Scissors beats Paper
4. Points are updated after each round.  
5. The game ends if a player reaches **2 points** or after **3 rounds**.  
6. Click **Try Again** to reset the game.

---

## Functions

### Function: `playGame(choice: Choice)`

- **Description:** Handles a single round of the game.  
- **Computer Choice:** Uses `Math.random()` to select one of the three options (Rock, Paper, Scissors) randomly.  
- Determines the winner of the round based on standard Rock-Paper-Scissors rules.  
- Updates the player and computer scores.  
- Checks for early win (first to 2 points) or game over after 3 rounds.  
- Updates the `resultText` to show the winner or a draw.  
- **Input:** `choice` — the player's selection (`Rock`, `Paper`, or `Scissors`).  
- **Output / Effect:** Updates the state variables: `playerChoice`, `computerChoice`, `playerScore`, `computerScore`, `round`, `gameOver`, and `resultText`.

---

### Function: `resetGame()`

- **Description:** Resets the game to its initial state so a new game can start.  
- Clears the scores, round number, player and computer choices, and game over status.  
- Resets the result text.  
- **Input:** None.  
- **Output / Effect:** Sets `round = 1`, `playerScore = 0`, `computerScore = 0`, `playerChoice = null`, `computerChoice = null`, `gameOver = false`, `resultText = ""`.

---

## State Variables Used in Functions

- `round` — Current round number (1–3)  
- `playerScore` — Player's score  
- `computerScore` — Computer's score  
- `playerChoice` — Player's current choice  
- `computerChoice` — Computer's current choice  
- `gameOver` — Indicates if the game has ended  
- `resultText` — Text showing final result

---
## Run Project
 1. Install dependencies: npm install 
 2. Start server: npm run dev 
 3. Open in browser: http://localhost:3000

