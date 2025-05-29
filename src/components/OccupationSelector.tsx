import React, { useState, useEffect, useRef } from "react";
import type { Occupation } from "../types";

interface OccupationSelectorProps {
  occupations: Occupation[];
  initialOccupation?: string;
  onOccupationChange?: (occupation: string) => void;
}

export default function OccupationSelector({
  occupations,
  initialOccupation,
  onOccupationChange,
}: OccupationSelectorProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialOccupation) {
      const index = occupations.findIndex((o) => o.title === initialOccupation);
      if (index !== -1) setCurrentIndex(index);
    }
  }, [initialOccupation, occupations]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (index: number) => {
    setCurrentIndex(index);
    setIsDropdownOpen(false);
    if (onOccupationChange) {
      onOccupationChange(occupations[index].title);
    }
  };

  const currentOccupation = occupations[currentIndex];

  return (
    <div>
      <p className="intro-paragraph">
        hello everyone! my name is <strong>carl reyes</strong>. i'm a{" "}
        <span className="occupation-wrapper" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="occupation-button"
          >
            {currentOccupation.title}
          </button>
          <div className={`dropdown-menu ${isDropdownOpen ? "open" : ""}`}>
            {occupations.map((occupation, index) => (
              <button
                key={occupation.title}
                onClick={() => handleSelect(index)}
                className="dropdown-item"
              >
                {occupation.title}
              </button>
            ))}
          </div>
        </span>{" "}
        originally from southern california but currently live in new england.
      </p>
      <p className="content-paragraph">{currentOccupation.content}</p>
    </div>
  );
}
