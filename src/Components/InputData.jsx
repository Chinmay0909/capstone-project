import { useState } from "react";

const InputData = ({ onSubmit, onLiveChange }) => {
    const [text, setText] = useState("");
    const [style, setStyle] = useState("handwriting-1");

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleStyleChange = (event) => {
        setStyle(event.target.value);
        onLiveChange(event.target.value); // Send selected font to OutputData in real-time
    };

    const handleSubmit = () => {
        onSubmit(text, style); // Pass data on submit
    };

    return (
        <div className="bg-sec border-head h-[100%]">
            <div className="border-full-container mx-5">
                <div className="mt-5">
                    <h4 className="subhead">Input Text</h4>
                    <textarea
                        rows="5"
                        className="textarea border-[rgb(103, 99, 99)]"
                        placeholder="Enter the text ....."
                        value={text}
                        onChange={handleTextChange}
                    ></textarea>
                </div>

                <div className="my-1 p-2 flex gap-3">
                    <button className="border-head border-white rounded-lg w-full p-2 cursor-pointer">
                        Clear
                    </button>
                    <button
                        className="rounded-lg w-full p-2 bg-button cursor-pointer"
                        onClick={handleSubmit}
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
                            value={style}
                            onChange={handleStyleChange}
                        >
                            <option value="handwriting-1">handwriting-1</option>
                            <option value="handwriting-2">handwriting-2</option>
                            <option value="handwriting-3">handwriting-3</option>
                            <option value="handwriting-4">handwriting-4</option>
                            <option value="handwriting-5">handwriting-5</option>
                            <option value="handwriting-6">handwriting-6</option>
                            <option value="handwriting-7">handwriting-7</option>
                            <option value="handwriting-8">handwriting-8</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InputData;
