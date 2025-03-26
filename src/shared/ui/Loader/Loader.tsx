import { CircularProgress } from "@mui/material";
import React from "react";
import "./Loader.scss";

const Loader: React.FC = () => {
    return (
        <div className="loader-container">
            <CircularProgress />
        </div>
    )
}

export default Loader