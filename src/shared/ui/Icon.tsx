import React, { useMemo } from "react";
import incomingIcon from "../assets/incoming-icon.svg";
import outgoingIcon from "../assets/outgoing-icon.svg";
import missedIcon from "../assets/missed-icon.svg";
import noAnswerIcon from "../assets/noanswer-icon.svg";
import userIcon from "../assets/user-icon.svg";
import arrowupIcon from "../assets/arrowup-icon.svg";
import arrowdownIcon from "../assets/arrowdown-icon.svg";

interface IconProps {
    iconType: "incoming" | "outgoing" | "missed" | "noanswer" | "user" | "arrowup" | "arrowdown";
}

const Icon: React.FC<IconProps> = ({ iconType }) => {
    const iconMap = useMemo(() => ({
        incoming: incomingIcon,
        outgoing: outgoingIcon,
        missed: missedIcon,
        noanswer: noAnswerIcon,
        user: userIcon,
        arrowup: arrowupIcon,
        arrowdown: arrowdownIcon,
    }), []);

    const className = `icon ${iconType.includes('arrow') ? 'arrow' : ''}`

    return <img src={iconMap[iconType]} alt={iconType} className={className} />;
};

export default Icon;
