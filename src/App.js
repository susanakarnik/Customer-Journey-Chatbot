// src/App.js
import React, { useState } from "react";

const flow = {
  start: {
    message: "Hi! Welcome to our service. What do you want to do?",
    options: [
      { text: "Learn about products", next: "products" },
      { text: "Talk to support", next: "support" }
    ]
  },
  products: {
    message: "We have A, B, and C. Do you want pricing?",
    options: [
      { text: "Yes", next: "pricing" },
      { text: "No, go back", next: "start" }
    ]
  },
  pricing: {
    message: "Product A is $10, B is $20, C is $30.",
    options: [{ text: "Back", next: "products" }]
  },
  support: {
    message: "Please describe your issue. (Demo: goes back)",
    options: [{ text: "Back", next: "start" }]
  }
};

export default function App() {
  const [node, setNode] = useState("start");

  return (
    <div style={{ padding: 20, maxWidth: 500, margin: "0 auto" }}>
      <h2>Customer Journey Chatbot</h2>
      <p>{flow[node].message}</p>
      <div>
        {flow[node].options.map((opt, i) => (
          <button
            key={i}
            style={{ margin: 5 }}
            onClick={() => setNode(opt.next)}
          >
            {opt.text}
          </button>
        ))}
      </div>
    </div>
  );
}
