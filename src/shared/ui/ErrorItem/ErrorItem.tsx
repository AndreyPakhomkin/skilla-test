import { Typography } from "@mui/material";
import React from "react";
import "./ErrorItem.scss";

interface ErrorItemProps {
    errorMessage: string | null
}

const ErrorItem: React.FC<ErrorItemProps> = ({ errorMessage }) => {
    return (
        <div className="error-container">
            <Typography variant="h5" color="error">Error: </Typography>
            <Typography variant="h5" color="error">{errorMessage}</Typography>
        </div>
    )
}

export default ErrorItem