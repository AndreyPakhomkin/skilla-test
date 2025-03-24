import React from "react";

interface IconProps {
    iconType: "incoming" | "outgoing" | "missed" | "noAnswer" | "user"
}

const Icon: React.FC<IconProps> = ({ iconType }) => {
    const iconSrc = require(`../assets/${iconType}-icon.svg`);

    return <img src={iconSrc} alt={iconType} className="call-icon" />;
}

export default Icon