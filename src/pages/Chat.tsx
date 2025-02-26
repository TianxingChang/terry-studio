import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Message {
  text: string;
  isUser: boolean;
  avatar?: string;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const navigate = useNavigate();
  const ChatMessage = () => {
    if (messages.length === 0) {
      return (
        <div className="flex-1 overflow-y-auto p-4 flex items-center justify-center flex-col">
          <div className="text-4xl text-gray-300 font-bold">Terry AI</div>
          <div className="text-sm text-gray-400 mt-2">
            I'm a digital clone of Terry Chang's personality — feel free to ask
            me anything.
            <br />
            The responses may not fully reflect my thoughts due to LLM
            limitations.
          </div>
        </div>
      );
    }

    return (
      <div className="flex-1 overflow-y-auto p-4 space-y-4 mb-10">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 ${
              message.isUser ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
              <img
                src={message.avatar}
                alt={message.isUser ? "User Avatar" : "AI Avatar"}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                message.isUser
                  ? "bg-black text-white rounded-tr-none"
                  : "bg-gray-100 text-gray-800 rounded-tl-none"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
    );
  };
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim() === "") return;

    const newMessage: Message = {
      text: inputText,
      isUser: true,
      avatar: "/hacker_icon.png",
    };
    setMessages([...messages, newMessage]);

    const aiResponse: Message = {
      text: "This is a placeholder AI response.",
      isUser: false,
      avatar: "/mapperai_logo.png",
    };
    setMessages((prev) => [...prev, aiResponse]);
    setInputText("");
  };

  return (
    <div className="h-screen w-screen p-10 ">
      <div className="h-full max-w-3xl mx-auto flex flex-col ">
        {/* Back button */}
        <div className="p-2 flex justify-between items-center mb-20 ">
          <div>
            <div
              onClick={() => navigate("/")}
              className="text-white text-lg border-[1px] border-transparent px-2 rounded-2xl hover:border-purple-200 transition-colors duration-200 cursor-pointer"
            >
              ←
            </div>
          </div>
          <div className="flex gap-4 items-center">
            {/* <div className="text-sm flex items-center justify-center font-bold">
              Terry AI
            </div> */}
            <div
              onClick={() => setMessages([])}
              className="text-white border-0 border-purple-900 px-3 py-1 rounded-2xl hover:bg-slate-900 transition-colors duration-200 cursor-pointer"
            >
              + New Chat
            </div>
          </div>
        </div>

        {/* Chat messages */}
        <ChatMessage />
        {/* Input form */}
        <form onSubmit={handleSendMessage} className="p-2">
          <div className="relative">
            <div className="flex justify-between items-center rounded-full border-[1px] border-[rgb(210,210,210)] pl-4 pr-2 py-[6px]">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Message..."
                className="w-full py-1 pl-2 rounded-full border-0 focus:outline-none"
              />
              <button
                type="submit"
                style={{
                  borderRadius: "9999px",
                  padding: "4px 16px",
                  backgroundColor: "black",
                  color: "white",
                  fontSize: "0.875rem",
                }}
                className="hover:bg-gray-800 transition-colors duration-200"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;
