"use client";
import { useState } from "react";

type Choice = {
  name: "Rock" | "Paper" | "Scissors";
  icon: string;
};

export default function GamePage() {
  const choices: Choice[] = [
    { name: "Rock", icon: "✊" },
    { name: "Paper", icon: "✋" },
    { name: "Scissors", icon: "✌️" },
  ];

  const [round, setRound] = useState(1);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);

  const [gameOver, setGameOver] = useState(false);
  const [resultText, setResultText] = useState("");

  const playGame = (choice: Choice) => {
    if (gameOver) return;

    // 🎲 اختيار الكمبيوتر (عشوائي 100%)
    const computer =
      choices[Math.floor(Math.random() * choices.length)];

    setPlayerChoice(choice);
    setComputerChoice(computer);

    let result: "player" | "computer" | "tie" = "tie";

    if (
      (choice.name === "Rock" && computer.name === "Scissors") ||
      (choice.name === "Paper" && computer.name === "Rock") ||
      (choice.name === "Scissors" && computer.name === "Paper")
    ) {
      result = "player";
    } else if (choice.name !== computer.name) {
      result = "computer";
    }

    // حساب السكور الجديد
    const newPlayerScore =
      playerScore + (result === "player" ? 1 : 0);
    const newComputerScore =
      computerScore + (result === "computer" ? 1 : 0);

    setPlayerScore(newPlayerScore);
    setComputerScore(newComputerScore);

    // 🏆 فوز مبكر (أول من يصل إلى 2)
    if (newPlayerScore === 2 || newComputerScore === 2) {
      setGameOver(true);
      setResultText(
        newPlayerScore === 2
          ? "🎉 YOU WIN!"
          : "💻 COMPUTER WINS!"
      );
      return;
    }

    // الجولة الثالثة فقط إذا ما أحد وصل 2
    if (round === 3) {
      setGameOver(true);

      if (newPlayerScore > newComputerScore)
        setResultText("🎉 YOU WIN!");
      else if (newComputerScore > newPlayerScore)
        setResultText("💻 COMPUTER WINS!");
      else setResultText("🤝 DRAW!");
    } else {
      setRound(r => r + 1);
    }
  };

  const resetGame = () => {
    setRound(1);
    setPlayerScore(0);
    setComputerScore(0);
    setPlayerChoice(null);
    setComputerChoice(null);
    setGameOver(false);
    setResultText("");
  };

  return (
    <div className="center" style={{ paddingTop: 40 }}>
      <h1 style={{ fontSize: 36 }}>
        {gameOver ? "GAME OVER" : `ROUND ${round} / 3`}
      </h1>

      <div className="choices">
        {choices.map(choice => (
          <div
            key={choice.name}
            className="card"
            onClick={() => playGame(choice)}
            style={{ opacity: gameOver ? 0.4 : 1 }}
          >
            <div style={{ fontSize: 70 }}>{choice.icon}</div>
            <span>{choice.name}</span>
          </div>
        ))}
      </div>

      {playerChoice && computerChoice && (
        <div className="result">
          <div>
            <p>You</p>
            <div style={{ fontSize: 50 }}>{playerChoice.icon}</div>
          </div>
          <div>
            <p>Computer</p>
            <div style={{ fontSize: 50 }}>{computerChoice.icon}</div>
          </div>
        </div>
      )}

      <div className="score">
        <div>You: {playerScore}</div>
        <div>CPU: {computerScore}</div>
      </div>

      {gameOver && (
        <>
          <h2 style={{ marginTop: 25 }}>{resultText}</h2>
          <button className="btn" onClick={resetGame}>
            Try Again
          </button>
        </>
      )}
    </div>
  );
}

