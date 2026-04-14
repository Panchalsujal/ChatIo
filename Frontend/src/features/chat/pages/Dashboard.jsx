import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";
import { useChat } from "../hooks/useChat";

const Dashboard = () => {
  const chat = useChat();

  const chats = useSelector((state) => state.chat.chats);
  const currentChatId = useSelector((state) => state.chat.currentChatId);

  const [chatInput, setChatInput] = useState("");

  // initialize socket + chats
  useEffect(() => {
    chat.initializeSocketConnection();
    chat.getChatsHandler();
  }, []);

  // send message
  const handleSubmitMessage = (e) => {
    e.preventDefault();

    const trimmedMessage = chatInput.trim();

    if (!trimmedMessage) return;

    chat.sendMessageHandler({
      message: trimmedMessage,
      chatId: currentChatId,
    });

    setChatInput("");
  };

  // open chat
  const openChat = (chatId) => {
    chat.handleOpenChat(chatId);
  };

  return (
    <main className="h-screen w-full flex bg-neutral-800 text-white">
      {/* Sidebar */}
      <aside className="w-1/4 bg-neutral-900 border-r border-neutral-700 flex flex-col">
        <div className="p-4 border-b border-neutral-700">
          <h1 className="text-xl font-bold ">Chat-Io</h1>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {Object.values(chats || {}).map((chatItem) => (
            <button
              key={chatItem.id}
              onClick={() => openChat(chatItem.id)}
              className={`w-full p-3 rounded-lg text-left transition-colors
              ${
                currentChatId === chatItem.id
                  ? "bg-neutral-700 border border-neutral-500"
                  : "border border-neutral-600 hover:bg-neutral-800"
              }`}
            >
              
              <ReactMarkdown>{chatItem.title || "Untitled Chat"}</ReactMarkdown>
            </button>
          ))}
        </div>
      </aside>

      {/* Chat Area */}
      <div className=" flex-1 flex flex-col relative overflow-hidden ">
        {/* Messages */}
        <div
          className="scroller flex-1 overflow-y-auto p-6 space-y-4 scroll-smooth
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:bg-transparent
        [&::-webkit-scrollbar-thumb]:bg-neutral-600
        [&::-webkit-scrollbar-thumb]:rounded-lg
        hover:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
        >
          {(chats[currentChatId]?.messages || []).map((msg, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                msg.role === "user" ? "items-end" : "items-start"
              }`}
            >
              <div
                className={`max-w-lg px-4 py-3 rounded-lg ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-neutral-700 text-gray-100 rounded-bl-none"
                }`}
              >
                <span className="text-xs opacity-75 capitalize block mb-1">
                  {msg.role}
                </span>

                {msg.role === "user" ? (
                  <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                ) : (
                  <div className="prose prose-invert max-w-none">
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-6 bg-neutral-800">
          <form onSubmit={handleSubmitMessage} className="flex gap-4 w-full">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-neutral-700 text-white placeholder-neutral-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-500"
            />

            <button
              type="submit"
              disabled={!chatInput.trim()}
              className="px-6 py-3 bg-neutral-600 hover:bg-neutral-500 rounded-lg font-semibold transition-colors disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
