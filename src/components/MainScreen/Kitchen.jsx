import React from "react";

export default function Kitchen({ setDropdownVisible }) {
  return (
    <div
      className="absolute top-50 z-[9999] w-[90%] mx-20 h-32 bg-white border border-gray-300 shadow-lg rounded-md "
      onMouseLeave={() => {
        setDropdownVisible(false);
      }}
    >
      <ul>
        <li className="px-4 py-2">Subcategory 1</li>
        <li className="px-4 py-2">Subcategory 2</li>
        <li className="px-4 py-2">Kitchen 3</li>
      </ul>
    </div>
  );
}
