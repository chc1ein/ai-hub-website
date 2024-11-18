import { Link } from "@remix-run/react";
import React, { memo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const NonMemoizedMarkdown = ({ children }: { children: string }) => {
    const components = {
        code: ({ node, inline, className, children, ...props }: any) => {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
                <pre
                    {...props}
                    className={`${className} text-xs w-full p-1 mt-2 border`}
                >
                    <code className={match[1]}>{children}</code>
                </pre>
            ) : (
                <code
                    className={`${className} text-xs py-0.5 px-1 rounded-md`}
                    {...props}
                >
                    {children}
                </code>
            );
        },
        ol: ({ node, children, ...props }: any) => {
            return (
                <ol className="list-decimal list-outside ml-4" {...props}>
                    {children}
                </ol>
            );
        },
        li: ({ node, children, ...props }: any) => {
            return (
                <li className="py-1" {...props}>
                    {children}
                </li>
            );
        },
        ul: ({ node, children, ...props }: any) => {
            return (
                <ul className="list-decimal list-outside ml-4" {...props}>
                    {children}
                </ul>
            );
        },
        strong: ({ node, children, ...props }: any) => {
            return (
                <span className="font-semibold" {...props}>
                    {children}
                </span>
            );
        },
        a: ({ node, children, ...props }: any) => {
            return (
                <Link
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                    {...props}
                >
                    {children}
                </Link>
            );
        },
    };

    return (
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
            {children}
        </ReactMarkdown>
    );
};

export const Markdown = memo(
    NonMemoizedMarkdown,
    (prevProps, nextProps) => prevProps.children === nextProps.children,
);
