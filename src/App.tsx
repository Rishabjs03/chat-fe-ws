import React, { useEffect, useState } from "react";

const App = () => {
  const [Message, setMessage] = useState<string[]>([]);
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    ws.onmessage = (event) => {
      setMessage((m) => [...m, event.data]);
    };
  }, []);
  return (
    <div className="h-screen bg-black flex flex-col">
      <div className="h-[90vh] pt-8">
        {Message.map((Message) => (
          <div className="m-4">
            <span className="bg-white text-black rounded p-4">{Message}</span>
          </div>
        ))}
      </div>
      <div className="bg-black w-full flex gap-2">
        <input type="text" className="flex-1  rounded-full"></input>
        <button className="bg-purple-500 text-white  rounded-full p-4">
          Send Message{" "}
        </button>
      </div>
    </div>
  );
};

export default App;
