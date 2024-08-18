import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 inset-x-0 bg-gray-200 py-4">
      <div className="flex justify-center space-x-5 items-center">
        <p className="text-gray-600">&copy; 2024.</p>
        <a
          href="https://github.com/naufalalief"
          className="text-gray-600 underline"
          target="_blank"
        >
          Naufal Alief
        </a>
        <span> . </span>
        <a
          href="https://github.com/naufalalief/color-palette-generator/commits/main/"
          className="text-gray-600 underline"
          target="_blank"
        >
          Changelog
        </a>
      </div>
    </footer>
  );
};

export default Footer;
