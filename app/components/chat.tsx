import { DcUiButton, DcUiFilterTag, DcUiFlex, DcUiFlexItem, DcUiIcon, DcUiText, DcUiTextareaWrapper, DcUiTooltip } from "@boschrexroth/nextgen-web-ui-toolkit-react";
import React from "react";

interface ChatProps {
}

export default function Chat(props: ChatProps) {
    const [rowCount, setRowCount] = React.useState(1);
    // hold the message that user type. LLM can give some suggestion (completion) based on not complete message.
    // It will need more than textarea to handle this.
    const [message, setMessage] = React.useState("");
    const [isEnterPressed, setIsEnterPressed] = React.useState(false);
    // hold all of the role and task that want to be solved
    const [history, setHistory] = React.useState<string[]>([]);
    
    function sendMessage() {
        // TODO: send message to LLM model and get the response (role, task, and solution)
        console.log('sendMessage', message);
        setHistory([...history, message]);
        setMessage("");
        setRowCount(1);
    }   

    return (
        <div className="module-highlight p-4 w-[calc(100vw-100px)]">
            <div className="flex items-stretch space-x-4 ">
                <DcUiTextareaWrapper
                    label="Enter your message"
                    label-position="default"
                    message="This is a message"
                    validationstate="none"
                    show-character-count="false"
                    className="w-full">
                        <textarea
                            rows={rowCount}
                            value={message}
                            onChange={(event) => {
                                if (!isEnterPressed) {
                                    setMessage(event.target.value);
                                    const lineCount = event.target.value?.split(/\r\n|\r|\n/)?.length || 1;
                                    setRowCount(lineCount > 15 ? 15 : lineCount);    
                                }
                            }}
                            onKeyDown={(event) => {
                                if (event.keyCode === 13 && !event.shiftKey) {
                                    setIsEnterPressed(true);
                                    event.preventDefault();
                                    sendMessage();
                                } else {
                                    setIsEnterPressed(false);
                                }
                            }}
                            className="w-full"
                        ></textarea>
                </DcUiTextareaWrapper>
                <DcUiButton variant="secondary" size="large" type="button" onClick={sendMessage}>
                    <DcUiIcon name="dc_paperplane" aria="{'aria-label': 'dc_paperplane icon'}" />
                </DcUiButton>
            </div>
            <div className="mt-2">
                {history.map((message, index) => (
                    <DcUiFilterTag label={message} className="mx-1" />
                ))}
            <DcUiButton id="tooltip-trigger-click-10" size="small">Click me</DcUiButton>
            <DcUiTooltip
                trigger-element="tooltip-trigger-click-10"
                placement="bottom"
                trigger="click">
                    <DcUiText variant="mid-size-text">
                        Some suggestion here... With yes/no button to select. The question is coming from LLM.
                        It can be trigger when the user cursor is in text box and idling for a while.
                    </DcUiText>
                    <DcUiFlex gutter="8">
                        <DcUiFlexItem><DcUiButton size="small">Yes</DcUiButton></DcUiFlexItem>
                        <DcUiFlexItem><DcUiButton size="small" variant="tertiary">No</DcUiButton></DcUiFlexItem>
                    </DcUiFlex>
            </DcUiTooltip>
            </div>
        </div>
    );
}
