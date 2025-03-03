import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RotatingText from "../components/ui/RotatingText";

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
        <div className="flex overflow-y-auto flex-col flex-1 justify-center items-center p-4 pb-40">
          <div className="text-4xl font-bold text-gray-300">Terry AI</div>
          <div className="flex justify-center mt-4 w-full text-sm text-gray-400">
            <RotatingText
              texts={[
                "I'm a digital clone of Terry Chang's personality",
                "Ask my anything",
                "The responses may not fully reflect my thoughts.",
              ]}
              mainClassName="px-2 w-fit sm:px-2 md:px-3 bg-[rgb(30,30,30)] text-[rgb(140,140,140)] overflow-hidden py-0.5 py-1 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.02}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={5000}
            />
          </div>
        </div>
      );
    }

    return (
      <div className="overflow-y-auto flex-1 p-4 mb-10 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 ${
              message.isUser ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div className="overflow-hidden flex-shrink-0 w-8 h-8 rounded-full">
              <img
                src={message.avatar}
                alt={message.isUser ? "User Avatar" : "AI Avatar"}
                className="object-cover w-full h-full"
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
      text: "Terry AI is not available at the moment (coming soon).",
      isUser: false,
      avatar: "/mapperai_logo.png",
    };
    setMessages((prev) => [...prev, aiResponse]);
    setInputText("");
  };

  return (
    <div className="fixed inset-0 p-4 mb-6 w-screen md:p-8">
      <div className="flex flex-col mx-auto max-w-3xl h-full">
        {/* Back button */}
        <div className="flex justify-between items-center p-2 mb-20">
          <div>
            <div
              onClick={() => navigate("/")}
              className="text-white text-lg border-[1px] border-transparent px-2 rounded-2xl hover:border-purple-200 transition-colors duration-200 cursor-pointer"
            >
              ←
            </div>
          </div>
          <div className="flex gap-4 items-center">
            {/* <div className="flex justify-center items-center text-sm font-bold">
              Terry AI
            </div> */}
            <div
              onClick={() => setMessages([])}
              className="px-3 py-1 text-white rounded-2xl border-0 border-purple-900 transition-colors duration-200 cursor-pointer hover:bg-slate-900"
            >
              + New Chat
            </div>
          </div>
        </div>

        {/* Chat messages */}
        <ChatMessage />
        {/* Input form */}
        <form onSubmit={handleSendMessage} className="px-2">
          <div className="relative">
            <div className="flex justify-between text-gray-300 bg-transparent items-center rounded-full border-[1px] border-[rgb(210,210,210)] pl-4 pr-[4px] py-[5px]">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Message..."
                className="py-1 pl-2 w-full rounded-full border-0 focus:outline-none"
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
                className="transition-colors duration-200 hover:bg-gray-800"
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
