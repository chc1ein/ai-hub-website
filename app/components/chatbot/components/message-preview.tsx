import { Message } from "ai";
import React from "react";
import { Markdown } from "./markdown";

interface MessagePreviewProps {
    className?: string;
    message: Message;
}

const MessagePreview = React.forwardRef<
    HTMLElement,
    MessagePreviewProps
>(({ className, ...props }, ref) => {
    return (
        <div>
            <div className="flex flex-col gap-2 w-full text-xs">
                {props.message.content && (
                <div className={"p-2 " + (props.message.role === 'user' ? "bg-[#d1dce3] text-right" : "")}>
                    <Markdown>{props.message.content as string}</Markdown>
                </div>
                )}
            </div>
        </div>
    );
});

export default MessagePreview;

