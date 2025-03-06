import { useState } from "react";
import './App.css';

function App() {
    const [inputText, setInputText] = useState("");
    const [selectedStyle, setSelectedStyle] = useState("");
    const [livestyle, setLiveStyle] = useState(""); // Live preview font style
    const [submittedStyle, setSubmittedStyle] = useState("");

    // Function to receive submitted data
    const handleDataSubmit = (text, style) => {
        setInputText(text);
        setSelectedStyle(style);
        setSubmittedStyle(style);
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
                {/* Input Section */}
                <div className="bg-sec border-head h-[100%]">
                    <div className="border-full-container mx-5">
                        <div className="mt-5">
                            <h4 className="subhead">Input Text</h4>
                            <textarea
                                rows="5"
                                className="textarea border-[rgb(103, 99, 99)]"
                                placeholder="Enter the text ....."
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                            ></textarea>
                        </div>

                        <div className="my-1 p-2 flex gap-3">
                            <button 
                                className="border-head border-white rounded-lg w-full p-2 cursor-pointer"
                                onClick={() => setInputText("")}
                            >
                                Clear
                            </button>
                            <button
                                className="rounded-lg w-full p-2 bg-button cursor-pointer"
                                onClick={() => handleDataSubmit(inputText, selectedStyle)}
                            >
                                Submit
                            </button>
                        </div>

                        <div className="mb-5">
                            <label htmlFor="handwriting" className="subhead mt-1">Choose a Handwriting Style</label>
                            <div className="my-5">
                                <select
                                    id="handwriting"
                                    className="custom-select"
                                    value={selectedStyle}
                                    onChange={(e) => {
                                        setSelectedStyle(e.target.value);
                                        handleLiveStyleChange(e.target.value);
                                    }}
                                >
                                    
                                    <option  value={``}>Select Handwriting Style</option>
                                    <option  value={`handwriting-1`}>handwriting-1</option>
                                    <option  value={`handwriting-2`}>handwriting-2</option>
                                    <option  value={`handwriting-3`}>handwriting-3</option>
                                    <option  value={`handwriting-4`}>handwriting-4</option>
                                        
                                  
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Output Section */}
                <div className="bg-sec border-head h-[100%] flex flex-col">
                    {/* First Section - Live Preview */}
                    <div className="flex-1 mx-5 mt-5 border rounded-lg p-4 flex flex-col justify-between border-full-container">
                        <div className="flex  items-center">
                            <button className="border border-head rounded-lg w-[40%] p-2 cursor-pointer">
                                Generated Handwritten Text
                            </button>
                            
                        </div>
                       
                        <p className="subhead text-center " style={{ fontFamily: submittedStyle }}>
                            {inputText || "No text available"}
                        </p>
                    </div>

                    {/* Second Section - Submitted Style */}
                    <div className="flex-1 mx-5 my-5 border rounded-lg p-4 flex flex-col justify-between border-full-container">
                        <div className="flex justify-between items-center">
                            <button className="border border-head rounded-lg w-[40%] p-2 cursor-pointer">
                                Sample Text
                            </button>
                            
                        </div>
                        <p className="subhead text-center" style={{ fontFamily: livestyle }}>
                            This is the sample text and this is how the font looks like
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;