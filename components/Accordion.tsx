import React, { useState } from 'react';
import { Icons } from './Icons';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border-b border-zinc-800 last:border-0">
      <button
        onClick={onClick}
        className="flex flex-1 w-full items-center justify-between py-4 font-medium transition-all hover:text-zinc-200 text-left text-zinc-100"
      >
        {title}
        <Icons.ChevronDown
          className={`h-4 w-4 shrink-0 transition-transform duration-200 text-zinc-500 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-sm text-zinc-400 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: { title: string; content: string }[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-1">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};