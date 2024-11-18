import React from "react";
import FloatButton from "./components/floatbutton";
import ChatBotContainer from "./components/chatbot-container";
import { CoreMessage, Message } from "ai";
import { useChat } from "ai/react";

interface ChatBotProps {
    messages?: Message[];
}

export default function ChatBot(props: ChatBotProps) {
    const [floatButtonOpened, setFloatButtonOpened] = React.useState(false);
    const { messages, handleSubmit, input, setInput, append, isLoading, stop } =
    useChat({
      api: "/api/chat",
      body: { id: "0" },
      initialMessages: [],
      onResponse: (response) => {
        console.log(response);
      }
    });

    return (
        <>
            {floatButtonOpened && (
                <ChatBotContainer
                    messages={props.messages ? props.messages : messages}
                    onClose={() => setFloatButtonOpened(!floatButtonOpened)}
                    input={input}
                    setInput={setInput}
                    sendMessage={handleSubmit}
                />
            )}
            {!floatButtonOpened && (
                <FloatButton
                    onClick={() => setFloatButtonOpened(!floatButtonOpened)}
                >
                </FloatButton>
            )}
        </>
    );
}
