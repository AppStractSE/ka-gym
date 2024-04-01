"use client";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  title: string;
  content: string;
}

const Accordion = ({ title, content }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="overflow-hidden transition-all duration-300 ease-in-out cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-regular md:text-3xl">{title}</h3>
        <div
          className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          <BsChevronDown />
        </div>
      </div>
      <div
        className={`overflow-hidden border-t duration-300 ease-in-out ${isOpen ? "max-h-[1000px]" : "max-h-0"}`}
      >
        <p className="px-1 mt-2 text-base md:text-lg">{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
