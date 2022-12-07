import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Cookies from "universal-cookie";

const App = () => {
    const cookies = new Cookies();
    cookies.set("frontend", "merge");

    console.log();

    return (
        <>
            <h1>Cookies</h1>
            <ul>
                <li>
                    <strong>Backend:</strong> "alabala" /{" "}
                    {cookies.get("alabala")}
                </li>
                <li>
                    <strong>FrontEnd:</strong> "frontend" /{" "}
                    {cookies.get("frontend")}
                </li>
            </ul>
        </>
    );
};

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
