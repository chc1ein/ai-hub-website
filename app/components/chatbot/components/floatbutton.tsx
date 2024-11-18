import {
    DcUiButton,
    DcUiIcon,
} from "@boschrexroth/nextgen-web-ui-toolkit-react";
import React from "react";

interface FloatButtonProps {
    onClick?: () => void;
}

const FloatButton = React.forwardRef<
    HTMLElement,
    FloatButtonProps
>(({ ...props }, ref) => {
    return (
        <DcUiButton
            icon="dc_chat"
            size="large"
            onClick={props.onClick ? props.onClick : () => { }}
            hideLabel={true}
            className="fixed bottom-4 right-4 z-999"
        >
        </DcUiButton>
    );
});

export default FloatButton;

