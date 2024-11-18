import {
    DcUiButton,
    DcUiIcon,
    DcUiTextareaWrapper,
} from "@boschrexroth/nextgen-web-ui-toolkit-react";
import React from "react";
import { cn } from "~/components/lib/utils";

interface ChatBotInputProps {
    className?: string;
    input: string;
    setInput: (input: string) => void;
    sendMessage?: () => void;
}

const ChatBotInput = React.forwardRef<
    HTMLElement,
    ChatBotInputProps
>(({ className, ...props }, ref) => {
    const [rowCount, setRowCount] = React.useState(1);
    // const [message, setMessage] = React.useState("");
    const [isEnterPressed, setIsEnterPressed] = React.useState(false);
    const maxRowCount = 5;

    return (
        <div className={cn("flex space-x-4", className)}>
            <DcUiTextareaWrapper
                label="Enter your message"
                label-position="default"
                message="This is a message"
                validationstate="none"
                show-character-count="false"
                className="w-full">
                <textarea
                    rows={rowCount}
                    value={props.input}
                    onChange={(event) => {
                        if (!isEnterPressed) {
                            props.setInput(event.target.value);
                            // setMessage(event.target.value);
                            const lineCount = event.target.value?.split(/\r\n|\r|\n/)?.length || 1;
                            setRowCount(lineCount > maxRowCount ? maxRowCount : lineCount);
                        }
                    }}
                    onKeyDown={(event) => {
                        if (event.keyCode === 13 && !event.shiftKey) {
                            setIsEnterPressed(true);
                            event.preventDefault();
                            if (props.sendMessage) {
                                props.sendMessage();
                            }
                        } else {
                            setIsEnterPressed(false);
                        }
                    }}
                    className="w-full"
                ></textarea>
            </DcUiTextareaWrapper>
            <DcUiButton 
                variant="secondary"
                size="large"
                type="button"
                disabled={props.input === ""}
                onClick={props.sendMessage ? props.sendMessage : () => {}}
                className="mt-auto"
            >
                <DcUiIcon name="dc_paperplane" aria="{'aria-label': 'dc_paperplane icon'}" />
            </DcUiButton>
        </div>
    );
});

export default ChatBotInput;

