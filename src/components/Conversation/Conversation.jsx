import "./Conversation.css";
import girl1 from "../../assets/girl1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { useState, useEffect } from "react";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
  Avatar,
} from "@chatscope/chat-ui-kit-react";
// import axios from "axios";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});
const Conversation = () => {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem("conversationMessages");
    return savedMessages ? JSON.parse(savedMessages) : [];
  });

  useEffect(() => {
    localStorage.setItem("conversationMessages", JSON.stringify(messages));
  }, [messages]);

  const handleSubmit = async (message) => {
    const newOutgoingMessage = {
      message: message,
      sender: "user",
      direction: "outgoing",
      position: "single",
    };

    setMessages((newMessages) => [...newMessages, newOutgoingMessage]);
    setTyping(true);

    try {
      const completion = await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: `Pretend that your my Bebegirl, and you should always call me your Bebeboy and always put an emoji, you should always be sweet and use only filipino language ${message} `,
          },
        ],
        model: "mixtral-8x7b-32768",
      });
      const newIncomingMessage = {
        message: completion.choices[0]?.message?.content || "",
        sender: "Hercai",
        direction: "incoming",
        position: "single",
      };
      setMessages((oldMessages) => [...oldMessages, newIncomingMessage]);
    } catch (error) {
      console.error(error);
    }
    setTyping(false);
  };

  const handleDeleteConversation = () => {
    setMessages([]);
    localStorage.removeItem("conversationMessages");
  };

  return (
    <div className="convo-main-container">
      <div className="convo-content">
        <div className="convo-head">
          <div className="left">
            <img src={girl1} alt="" />
            <h3>Bebegirl 😍</h3>
          </div>
          <div className="right">
            <i>
              <FontAwesomeIcon icon={faPhone} />
            </i>
            <i>
              <FontAwesomeIcon icon={faVideo} />
            </i>
            <i onClick={handleDeleteConversation} className="clear-button">
              <FontAwesomeIcon icon={faCircleInfo} />
            </i>
          </div>
        </div>
        <div className="conversation-message">
          <MainContainer>
            <ChatContainer>
              <MessageList
                typingIndicator={
                  typing ? (
                    <TypingIndicator content="Bebegirl 😍 is typing.." />
                  ) : null
                }
              >
                {messages.map((message, i) => {
                  return (
                    <Message
                      key={i}
                      model={message}
                      style={{ textAlign: "start", borderRadius: "10px" }}
                    >
                      {message.direction === "incoming" && (
                        <Avatar name="Bebegirl" src={girl1} />
                      )}
                    </Message>
                  );
                })}
              </MessageList>
              <MessageInput
                placeholder="Aa"
                onSend={handleSubmit}
                style={{ border: "none" }}
              />
            </ChatContainer>
          </MainContainer>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
