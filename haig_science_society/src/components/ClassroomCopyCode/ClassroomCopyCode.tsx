"use client";

import React from "react";
import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";

interface Props {
  code: string;
}

const ClassroomCopyCode = ({ code }: Props) => {
  const classroomCode = code;

  const handleCopy = () => {
    navigator.clipboard.writeText(classroomCode);
    alert("Classroom code copied to clipboard!");
  };
  return (
    <div>
      Google Classroom code: <strong>{classroomCode}</strong>
      <button className="ml-2" onClick={handleCopy}>
        <FaRegCopy />
      </button>
    </div>
  );
};

export default ClassroomCopyCode;
