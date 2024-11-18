import { isRouteErrorResponse, useRouteError } from "@remix-run/react";

import Header from "./header";
import Footer from "./footer";

export default function ErrorPage() {
    const error = useRouteError();
    return (
        <div className="h-100vh">
            <div className="h-[calc(100vh-100px)]">                    
                <Header />

                <div className="flex flex-col items-center gap-9">
                    <h1>
                        {isRouteErrorResponse(error)
                            ? `Error ${error.status} - ${error.statusText}`
                            : error instanceof Error
                                ? error.message
                                : "Unknown Error"}
                    </h1>
                    <span className="lead">We're sorry, your request encountered an error.</span>
                </div>
            </div>
            <Footer />
        </div>
    );
}
