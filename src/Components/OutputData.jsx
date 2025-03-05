import { MdFileDownload } from "react-icons/md";
import '../App.css';

const OutputData = ({ inputText, selectedStyle, livestyle }) => {
    return (
        <div className="bg-sec border-head h-[100%] flex flex-col">
            {/* First Section - Live Preview */}
            <div className="flex-1 mx-5 mt-5 border rounded-lg p-4 flex flex-col justify-between border-full-container">
                <div className="flex justify-between items-center">
                    <button className="border border-head rounded-lg w-[40%] p-2 cursor-pointer">
                        Style Image
                    </button>
                    <MdFileDownload className="cursor-pointer" size={30} />
                </div>
                <p className="subhead text-center" style={{ fontFamily: selectedStyle }}>
                    {inputText || "No text available"}
                </p>
            </div>

            {/* Second Section - Submitted Style */}
            <div className="flex-1 mx-5 my-5 border rounded-lg p-4 flex flex-col justify-between border-full-container">
                <div className="flex justify-between items-center">
                    <button className="border border-head rounded-lg w-[40%] p-2 cursor-pointer">
                        Generate Image
                    </button>
                    <MdFileDownload className="cursor-pointer" size={30} />
                </div>
                <p className="subhead text-center" style={{ fontFamily: livestyle }}>
                    This is the sample text and this is how the font look likes  
                </p>
            </div>
        </div>
    );
};

export default OutputData;
