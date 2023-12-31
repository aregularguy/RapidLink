import React, { useState } from "react";
import axios from "axios";
import CopyToClipboard from "react-copy-to-clipboard";
// import { useNavigate } from "react-router-dom";

const Url = () => {
    const [shortenedLink, setShortenedLink] = useState("");
    const [userInput, setUserInput] = useState("");
    const [error, setError] = useState("");

    const fetchData = async () => {
        try {
            const response = await axios(
                `https://api.shrtco.de/v2/shorten?url=${userInput}`
            );

            if (response.data.ok) {
                setShortenedLink(response.data.result.full_short_link);
                setError("");
            } else {
                setError("URL is not allowed or invalid.");
            }
        } catch (error) {
            setError("An error occurred. Please try again later.");
        }
    };

    return (
        <div>
            <div className="container h-screen flex justify-center items-center">
                <div className="text-center">
                    <h1 className="text-2xl font-medium text-blue-500 mb-4">
                        Our <span className="text-yellow-400">URL Shortener</span>
                    </h1>
                    <div>
                        <input
                            className="outline-none border-2 border-blue-500 rounded-md backdrop-blur-xl bg-white/20 shadow-md px-3 py-3"
                            type="text"
                            value={userInput}
                            placeholder="Enter link to be shortened"
                            onChange={(e) => {
                                setUserInput(e.target.value);
                            }}
                        />
                        <button
                            className="bg-blue-500 text-white px-8 py-3 ml-4 rounded-md"
                            onClick={() => {
                                fetchData();
                            }}
                        >
                            Submit URL
                        </button>
                        <div className="mt-5">
                            {shortenedLink}
                            <CopyToClipboard text={shortenedLink}>
                                <button className="border-2 border-blue-500 text-blue-500 font-medium px-5 py-2 ml-4 rounded-md">
                                    Copy URL to Clipboard
                                </button>
                            </CopyToClipboard>
                        </div>
                    </div>
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                </div>
            </div>
        </div>
    );
};

export default Url;
