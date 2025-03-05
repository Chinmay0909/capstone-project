import InputData from "./Components/InputData";
import OutputData from "./Components/OutputData";
import './App.css';
import { useState } from "react";

function App() {
    const [inputText, setInputText] = useState("");
    const [selectedStyle, setSelectedStyle] = useState("handwriting-1");
    const [livestyle, setLiveStyle] = useState("handwriting-1"); // Live preview font style

    // Function to receive submitted data from InputData
    const handleDataSubmit = (text, style) => {
        setInputText(text);
        setSelectedStyle(style);
    };

    // Function to update font style in real-time
    const handleLiveStyleChange = (style) => {
        setLiveStyle(style);
    };

    return (
        <>
            <h1 className="head-text text-center mt-4 mb-8">
                Generate Text in Anyone&apos;s Handwriting
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <InputData onSubmit={handleDataSubmit} onLiveChange={handleLiveStyleChange} />
                <OutputData inputText={inputText} selectedStyle={selectedStyle} livestyle={livestyle} />
            </div>
        </>
    );
}

export default App;
