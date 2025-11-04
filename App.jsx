import React, { useState } from "react";

export default function App() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "👋 Hi! I’m MedBot. Ask me anything about health or medicines." }
  ]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    setMessages([...messages, userMsg]);

    let reply = "";
    const lower = input.toLowerCase();

    if (lower.includes("headache"))
      reply = "It might be due to stress or dehydration. Drink water and rest. If it continues, see a doctor.";
    else if (lower.includes("fever"))
      reply = "A mild fever may mean infection. Stay hydrated and take paracetamol if needed.";
    else if (lower.includes("cold"))
      reply = "Common cold usually lasts 3–7 days. Rest, drink warm fluids, and keep yourself covered.";
    else if (lower.includes("stomach"))
      reply = "You could be having indigestion. Avoid spicy food and drink plenty of water.";
    else
      reply = "I'm not sure. Please give more details or consult a doctor if it’s serious.";

    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
    }, 600);

    setInput("");
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-4">
        <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">🏥 MedBot</h2>

        <div className="h-80 overflow-y-auto border p-2 mb-3 rounded">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={my-2 p-2 rounded-lg ${
                msg.from === "user"
                  ? "bg-blue-200 self-end text-right"
                  : "bg-gray-100 text-left"
              }}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            className="flex-1 border p-2 rounded"
            placeholder="Type your health question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}