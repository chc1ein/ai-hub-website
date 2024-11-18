import { aiModel } from "~/services/setup-ai.server";
import { ActionFunctionArgs, json } from "@remix-run/node";
import { convertToCoreMessages, Message, streamText } from "ai";

export async function action({ request }: ActionFunctionArgs) {
    // if POST method request
    if (request.method === "POST") {
        return POST(request);
    }

    // if DELETE method request
    if (request.method === "DELETE") {
        // return 200 status code
        return DELETE(request);
    }

    return json({}, { status: 200 });
}

async function POST(request: Request) {
    const { id, messages }: { id: string; messages: Array<Message> } =
        await request.json();

    const coreMessages = convertToCoreMessages(messages);
    console.log(coreMessages);

    const resultStream = await streamText({
        model: aiModel,
        system:
            "you are a friendly assistant! keep your responses concise and helpful.",
        messages: coreMessages,
        maxSteps: 5,
        tools: {
        },
        experimental_telemetry: {
            isEnabled: true,
            functionId: "stream-text",
        },
    });
    return resultStream.toDataStreamResponse();
}

async function DELETE(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
        return new Response("Not Found", { status: 404 });
    }

    try {
        // const chat = await getChatById({ id });
        // await deleteChatById({ id });

        return new Response("Chat deleted", { status: 200 });
    } catch (error) {
        return new Response("An error occurred while processing your request", {
            status: 500,
        });
    }
}
