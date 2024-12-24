import React from "react";

export default function Jwellery({ setDropdownVisible }) {
  return (
    <div
      className="absolute z-[9999]  w-[90%] mx-20 h-32 bg-white border border-gray-300 shadow-lg rounded-md "
      onMouseLeave={() => {
        setDropdownVisible(false);
      }}
    >
      <ul>
        <li className="px-4 py-2">Subcategory 1</li>
        <li className="px-4 py-2">Subcategory 2</li>
        <li className="px-4 py-2">Jwellery 3</li>
      </ul>
    </div>
  );
}
