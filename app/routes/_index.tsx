import { DcUiButton, DcUiFlex, DcUiFlexItem, DcUiIcon } from "@boschrexroth/nextgen-web-ui-toolkit-react";
import type { MetaFunction } from "@remix-run/node";
import React from "react";
import Chat from "~/components/chat";
import ChatBot from "~/components/chatbot/chatbot";
import Footer from "~/components/footer";
import Header from "~/components/header";
import ToolCard from "~/components/tool-card";

export const meta: MetaFunction = () => {
    return [
        { title: "AI Hub" },
        { name: "description", content: "Welcome to AI Hub!" },
    ];
};

export default function Index() {
    const [hello, setHello] = React.useState("Hello");

    return (
        <div className="h-100vh">
            <div className="">
                <Header />

                <div className="flex flex-col items-center gap-9">
                    <h1>Welcome to AI Hub</h1>

                    <DcUiButton
                        type="button"
                        onClick={() => {
                            fetch("/api/hello", { method: "POST" }).then((response) => {
                                if (response.ok) {
                                    response.json().then((data) => {
                                        setHello(data.value);
                                    });
                                } else {
                                    setHello("Error");
                                }
                            });
                        }}
                    >
                        {hello}
                    </DcUiButton>

                    <Chat />

                    <h2>Use Cases</h2>
                    <DcUiFlex class="flex-preview" wrap="wrap" justify-content="center" gutter="24" className="w-[calc(100vw-100px)]">
                    <DcUiFlexItem>
                            <ToolCard title="Tool Card" description="Description" />
                        </DcUiFlexItem>
                        <DcUiFlexItem>
                            <ToolCard title="Tool Card" description="Description" />
                        </DcUiFlexItem>
                        <DcUiFlexItem>
                            <ToolCard title="Tool Card" description="Description" />
                        </DcUiFlexItem>
                        <DcUiFlexItem>
                            <ToolCard title="Tool Card" description="Description" />
                        </DcUiFlexItem>
                        <DcUiFlexItem>
                            <ToolCard title="Tool Card" description="Description" />
                        </DcUiFlexItem>
                        <DcUiFlexItem>
                            <ToolCard title="Tool Card" description="Description" />
                        </DcUiFlexItem>
                        <DcUiFlexItem>
                            <ToolCard title="Tool Card" description="Description" />
                        </DcUiFlexItem>
                        <DcUiFlexItem>
                            <ToolCard title="Tool Card" description="Description" />
                        </DcUiFlexItem>
                        <DcUiFlexItem>
                            <ToolCard title="Tool Card" description="Description" />
                        </DcUiFlexItem>
                        <DcUiFlexItem>
                            <ToolCard title="Tool Card" description="Description" />
                        </DcUiFlexItem>
                        <DcUiFlexItem>
                            <ToolCard title="Tool Card" description="Description" />
                        </DcUiFlexItem>
                        <DcUiFlexItem>
                            <ToolCard title="Tool Card" description="Description" />
                        </DcUiFlexItem>
                    </DcUiFlex>
                </div>
            </div>
            <Footer />
            <ChatBot />
        </div>
    );
}
