import React, { useMemo } from "react";
import incomingIcon from "../../assets/incoming-icon.svg";
import outgoingIcon from "../../assets/outgoing-icon.svg";
import missedIcon from "../../assets/missed-icon.svg";
import noAnswerIcon from "../../assets/noanswer-icon.svg";
import userIcon from "../../assets/user-icon.svg";
import arrowIcon from "../../assets/arrowup-icon.svg";
import "./IconItem.scss"

interface IconProps {
    iconType: "incoming" | "outgoing" | "missed" | "noanswer" | "user" | "arrowup" | "arrowdown" | "arrowright" | "arrowleft";
    onClick?: () => void;
}

const IconItem: React.FC<IconProps> = ({ iconType, onClick }) => {
    const iconMap = useMemo(() => ({
        incoming: incomingIcon,
        outgoing: outgoingIcon,
        missed: missedIcon,
        noanswer: noAnswerIcon,
        user: userIcon,
        arrowup: arrowIcon,
        arrowdown: arrowIcon,
        arrowright: arrowIcon,
        arrowleft: arrowIcon,
    }), []);

    const arrowClasses: Record<string, string> = {
        arrowup: "up",
        arrowdown: "down",
        arrowright: "right",
        arrowleft: "left",
    };

    const className = `iconItem ${arrowClasses[iconType] ? `arrow ${arrowClasses[iconType]}` : ""}`;

    return <img src={iconMap[iconType]} alt={iconType} className={className} onClick={onClick} />;
};

export default IconItem;
