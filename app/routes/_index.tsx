import { DcUiButton } from "@boschrexroth/nextgen-web-ui-toolkit-react";
import type { MetaFunction } from "@remix-run/node";
import React from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "AI Hub" },
    { name: "description", content: "Welcome to AI Hub!" },
  ];
};

export default function Index() {
  const [hello, setHello] = React.useState("Hello");

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <h1 className="leading text-2xl font-bold text-gray-800">
            Welcome to AI Hub
          </h1>
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
        </header>
      </div>
    </div>
  );
}
