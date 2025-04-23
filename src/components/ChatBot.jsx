import { useState, useRef, useEffect } from "react";

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() && !image) return;

    const newMessage = {
      role: "user",
      content: input.trim() || "Please analyze this image.",
      image: image ? URL.createObjectURL(image) : null,
    };
    setMessages([...messages, newMessage]);
    setInput("");
    setLoading(true);

    try {
      // Hardcoded API key (replace with your actual key)
      const openaiApiKey =
        "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"; // Apna API key yahan daalo

      console.log("OpenAI API Key:", openaiApiKey);

      if (!openaiApiKey) {
        throw new Error("OpenAI API key is missing.");
      }

      let messagePayload = [
        { role: "user", content: input.trim() || "Please analyze this image." },
      ];

      if (image) {
        const base64Image = await convertImageToBase64(image);
        messagePayload = [
          {
            role: "user",
            content: [
              { type: "text", text: input.trim() || "What’s in this image?" },
              {
                type: "image_url",
                image_url: { url: `data:image/jpeg;base64,${base64Image}` },
              },
            ],
          },
        ];
      }

      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${openaiApiKey}`,
          },
          body: JSON.stringify({
            model: image ? "gpt-4o" : "gpt-3.5-turbo", // gpt-4-vision-preview deprecated, use gpt-4o
            messages: messagePayload,
            max_tokens: 1000,
            temperature: 0.7,
          }),
        }
      );

      const data = await response.json();
      console.log("OpenAI API Response:", data);

      if (!response.ok || !data.choices || !data.choices.length) {
        throw new Error(
          data.error?.message ||
            "Failed to get a valid response from OpenAI API."
        );
      }

      const botMessage = {
        role: "assistant",
        content: data.choices[0].message.content,
      };
      setMessages([...messages, newMessage, botMessage]);
    } catch (error) {
      console.error("Error fetching response:", error.message);
      const errorMessage = {
        role: "assistant",
        content: `Sorry, I couldn’t process that: ${error.message}. Try again?`,
      };
      setMessages([...messages, newMessage, errorMessage]);
    }

    setImage(null);
    setLoading(false);
  };

  const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !loading) sendMessage();
  };

  return (
    <section className="w-full p-0 mx-auto h-screen flex flex-col bg-gray-100">
      <header className="p-4 bg-blue-600 text-white text-center rounded-t-lg">
        <h1 className="text-xl font-bold">ChatBot (Ajay)</h1>
      </header>
      <div className="flex-auto overflow-y-auto bg-black p-4">
        {messages.length === 0 && (
          <div className="text-center text-gray-500">
            Start chatting or upload an image to analyze!
          </div>
        )}
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            } mb-4`}
          >
            <div
              className={`max-w-xs p-3 rounded-lg ${
                msg.role === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {typeof msg.content === "string" ? (
                <p>{msg.content}</p>
              ) : (
                msg.content.map((item, i) =>
                  item.type === "text" ? <p key={i}>{item.text}</p> : null
                )
              )}
              {msg.image && (
                <img
                  src={msg.image}
                  alt="Uploaded by user"
                  className="mt-2 max-w-full rounded-lg"
                  style={{ maxHeight: "200px" }}
                />
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 bg-gray-100 border-t">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <input
              type="text"
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message or ask about an image..."
              disabled={loading}
            />
            <button
              className={`p-2 rounded-lg text-white ${
                loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
              }`}
              onClick={sendMessage}
              disabled={loading}
            >
              {loading ? "..." : "Send"}
            </button>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="file"
              accept="image/*"
              className="flex-1 p-2 border rounded-lg"
              onChange={handleImageChange}
              disabled={loading}
            />
            {image && (
              <span className="text-sm text-gray-500">
                {image.name} selected
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
