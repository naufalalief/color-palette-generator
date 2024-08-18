import React, { useState } from "react";
import ColorBox from "./ColorBox";

const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const ColorPaletteGenerator = () => {
  const [colors, setColors] = useState([
    generateRandomColor(),
    generateRandomColor(),
    generateRandomColor(),
    generateRandomColor(),
    generateRandomColor(),
  ]);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleGenerateColors = () => {
    setColors([
      generateRandomColor(),
      generateRandomColor(),
      generateRandomColor(),
      generateRandomColor(),
      generateRandomColor(),
    ]);
    setCopiedIndex(null);
  };

  const handleCopyToClipboard = (color, index) => {
    navigator.clipboard.writeText(color).then(
      () => {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  return (
    <div className="container">
      <div className="w-full mb-5">
        <h1 className="text-3xl font-bold">Color Palette Generator</h1>
      </div>
      <div className="flex flex-col w-full mb-5">
        {colors.map((color, index) => (
          <ColorBox
            key={color}
            color={color}
            index={index}
            copiedIndex={copiedIndex}
            onCopy={handleCopyToClipboard}
          />
        ))}
      </div>
      <button
        onClick={handleGenerateColors}
        className="bg-cyan-500 text-white font-bold py-2 px-4 rounded hover:bg-cyan-700"
      >
        Generate Colors
      </button>
    </div>
  );
};

export default ColorPaletteGenerator;
