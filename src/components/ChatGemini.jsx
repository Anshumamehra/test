import { wrap } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";

export default function ChatGemini() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage() {
    if (!input.trim() && !image) return;

    const newMessage = {
      role: "user",
      content: input.trim() || "Please analyze this image.",
      image: image ? URL.createObjectURL(image) : null,
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInput("");
    setImage(null);

    try {
      let bodyContent = {
        contents: [{ parts: [{ text: input || "Describe this image" }] }],
      };

      if (image) {
        const base64Image = await convertImageToBase64(image);
        bodyContent = {
          contents: [
            {
              parts: [
                { text: input || "What’s in this image?" },
                {
                  inlineData: {
                    mimeType: "image/jpeg",
                    data: base64Image,
                  },
                },
              ],
            },
          ],
        };
      }

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyDDEBDH-PoEgjf9z7I8mjrBkF1guMdQPRU`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bodyContent),
        }
      );

      const data = await response.json();
      const botReply =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I couldn't understand that.";

      const botMessage = {
        role: "assistant",
        content: botReply,
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      const errorMessage = {
        role: "assistant",
        content: `Error: ${error.message}`,
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  }

  const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  return (
    <section className="ChatGemini bg-black">
      <div className="container">
        <div className="contentWrap">
          <h2 className="text-white text-center capitalize">
            What can I help with?
          </h2>

          <div className="outerWrap min-h-[300px] bg-white p-[30px] mt-[50px]">
            {messages.length === 0 && (
              <p className="text-center text-black font-bold">
                Type a message or upload an image to start!
              </p>
            )}
            {messages.map((msg, index) => (
              <div
                className="innerContent flex-wrap flex"
                key={index}
                style={{
                  justifyContent:
                    msg.role === "user" ? "flex-end" : "flex-start",
                  marginBottom: "20px",
                }}
              >
                <div
                  className="imgWrap max-w-[60%] p-[10px] overflow-hidden"
                  style={{
                    borderRadius: "8px",
                    background: msg.role === "user" ? "#007bff" : "#e0e0e0",
                    color: msg.role === "user" ? "white" : "black",
                  }}
                >
                  <p>{msg.content}</p>
                  {msg.image && (
                    <img
                      className="h-auto"
                      src={msg.image}
                      alt="Uploaded by user"
                    />
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div
            className="inputText w-full"
            style={{
              padding: "30px",
              background: "#fff",
              borderTop: "1px solid #ddd",
            }}
          >
            <input
              type="text"
              id="userInput"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "20px",
                marginRight: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              style={{ with: "100%" }}
            />
            <button
              className="pink-btn mt-[20px] p-[10px] w-full "
              onClick={sendMessage}
            >
              Send
            </button>
            {image && (
              <span style={{ marginLeft: "10px", color: "#666" }}>
                {image.name} selected
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
