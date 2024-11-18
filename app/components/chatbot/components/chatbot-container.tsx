import {
    DcUiButton,
    DcUiFlex,
    DcUiFlexItem,
} from "@boschrexroth/nextgen-web-ui-toolkit-react";
import React, { useEffect } from "react";
import { Message } from "ai";
import ChatBotInput from "./chatbot-input";
import MessagePreview from "./message-preview";

interface ChatBotContainerProps {
    messages?: Message[];
    onClose?: () => void;
    input: string;
    setInput: (input: string) => void
    sendMessage?: () => void;
}

const ChatBotContainer = React.forwardRef<
    HTMLElement,
    ChatBotContainerProps
>(({ ...props }, ref) => {
    const messagePreviewRef = React.createRef<HTMLDivElement>();

    useEffect(() => {
        if (messagePreviewRef.current) {
            messagePreviewRef.current.scrollTop = messagePreviewRef.current.scrollHeight;
        }
    }, []);

    return (
        <>
            <div className="module-highlight fixed -bottom-8 right-4 z-[999] w-[calc(100%-2em)] h-[calc(100%-2em)] md:w-[350px] md:h-[420px]">
                <DcUiFlex justify-content="space-between" className="m-2">
                    <DcUiFlexItem>
                        <h4 className="m-0 p-0">Chatbot</h4>
                    </DcUiFlexItem>
                    <DcUiFlexItem>
                        <DcUiButton
                            icon="dc_close"
                            size="small"
                            hideLabel={true}
                            variant="link"
                            type="button"
                            onClick={props.onClose ? props.onClose : () => { }}
                        ></DcUiButton>
                    </DcUiFlexItem>
                </DcUiFlex>
                <div ref={messagePreviewRef} className="w-[calc(100%-0.5em)] h-[calc(100%-116px)] mx-1 p-2 border border-[#e5e7eb] overflow-auto">
                    {props.messages?.map((message, index) => {
                        return (
                            <MessagePreview
                                key={index}
                                message={message}
                            />
                        );
                    })}
                </div>    
                <ChatBotInput
                    className="absolute bottom-0 left-0 right-0 mx-1 mb-1"
                    input={props.input}
                    setInput={props.setInput}
                    sendMessage={props.sendMessage ? props.sendMessage : () => { }}
                />
            </div>
        </>
    );
});

export default ChatBotContainer;

