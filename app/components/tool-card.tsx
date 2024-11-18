import { DcUiButton, DcUiText } from "@boschrexroth/nextgen-web-ui-toolkit-react";

interface ToolCardProps {
    title: string;
    description: string;
}

export default function ToolCard(props: ToolCardProps) {
    return (
        <div className="module-highlight p-4 m-0">
            <DcUiText variant="emphasized-text" color="darkBlue02" >
                {props.title}
            </DcUiText>
            <DcUiText variant="text" color="darkBlue02" >
                {props.description}
            </DcUiText>

            <DcUiButton variant="secondary" size="small" className="mt-4">Getting started</DcUiButton>
        </div>
    );
}
