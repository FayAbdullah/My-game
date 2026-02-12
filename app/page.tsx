"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="center" style={{ height: "100vh" }}>
      <h1 style={{ fontSize: "52px", marginBottom: "15px" }}>
        Rock Paper Scissors
      </h1>

      <p style={{ fontSize: "20px", opacity: 0.8, marginBottom: "40px" }}>
        Beat the computer in 3 rounds
      </p>

      <Link href="/game">
        <button className="btn">Start Game</button>
      </Link>
    </div>
  );
}

