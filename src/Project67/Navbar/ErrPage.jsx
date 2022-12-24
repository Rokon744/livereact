import React from "react";
import { useNavigate } from "react-router-dom";

const ErrPage = () => {
    let back = useNavigate()
    return (
        <>
            <div className="text-center mt-5">
                <h1>404</h1>
                <h3>Page Not Found</h3>
                <button onClick={() => {back(-1)}}>Go Back</button>
            </div>
        </>
    )
};

export default ErrPage;