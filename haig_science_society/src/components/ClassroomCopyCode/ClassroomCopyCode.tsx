"use client";

import React from "react";
import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";

interface Props {
  code: string;
}

const ClassroomCopyCode = ({ code }: Props) => {
  const [copied, setCopied] = useState(false);

  const classroomCode = code;

  const handleCopy = () => {
    navigator.clipboard.writeText(classroomCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);

    // alert("Classroom code copied to clipboard!");
  };
  return (
    <div>
      Google Classroom code: <strong>{classroomCode}</strong>
      <button className="ml-2" onClick={handleCopy}>
        {copied ? (
          <span style={{ display: "inline-flex" }}>
            <FaCopy />{" "}
            <span className="text-white-600" style={{ fontSize: "16px" }}>
              &nbsp;Copied!
            </span>
          </span>
        ) : (
          <FaRegCopy />
        )}
      </button>
    </div>
  );
};

export default ClassroomCopyCode;
