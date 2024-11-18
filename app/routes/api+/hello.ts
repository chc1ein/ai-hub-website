import { ActionFunctionArgs } from "@remix-run/node"

export async function action({ request }: ActionFunctionArgs) {
    if (request.method === "POST") {
        return Response.json({ value: "Hi from Server" }, { status: 200 });
    }
}
