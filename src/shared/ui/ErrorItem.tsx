import React from "react";

interface ErrorItemProps {
    errorMessage: string | null
}

const ErrorItem: React.FC<ErrorItemProps> = ({ errorMessage }) => {
    return (
        <>
            <h4>Error</h4>
            <h6>{errorMessage}</h6>
        </>
    )
}

export default ErrorItem