import { ReactNode } from 'react';

interface AccordionCategoryProps {
  id: string;
  title: string;
  icon: ReactNode;
  isOpen: boolean;
  hasSelection: boolean;
  onToggle: () => void;
  children: ReactNode;
  isFirst: boolean;
  isLast: boolean;
}

export function AccordionCategory({ 
  title, 
  icon, 
  isOpen, 
  hasSelection, 
  onToggle, 
  children,
  isFirst,
  isLast
}: AccordionCategoryProps) {
  return (
    <div className="w-[328px]">
      <button
        onClick={onToggle}
        className={`relative h-[48px] w-full border-[#a08dda] shadow-[0px_4px_4px_0px_rgba(70,66,84,0.1)] flex items-center px-[11px] transition-colors ${
          hasSelection 
            ? 'bg-[#c6baea]' 
            : 'bg-white'
        } ${
          isFirst 
            ? 'border-t border-l border-r rounded-tl-[4px] rounded-tr-[4px]' 
            : 'border-l border-r border-t'
        } ${
          isLast && !isOpen ? 'border-b rounded-bl-[4px] rounded-br-[4px]' : ''
        } ${
          isOpen ? 'border-b' : ''
        }`}
      >
        <div className="flex items-center gap-[11px] flex-1">
          <div className="w-[24px] h-[24px] flex-shrink-0">
            {icon}
          </div>
          <span className={`font-['Poppins'] text-[12px] text-[#464254] ${hasSelection ? 'font-medium' : 'font-normal'}`}>
            {title}
          </span>
        </div>
        <div className={`w-[12px] h-[6px] transition-transform ${isOpen ? 'rotate-180' : 'rotate-90'}`}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 8">
            <path d="M13 7L7 1L1 7" stroke="#464254" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className={`bg-[#f9f9f9] border-[#a08dda] border-l border-r w-full ${
          isLast ? 'border-b rounded-bl-[4px] rounded-br-[4px]' : ''
        }`}>
          {children}
        </div>
      )}
    </div>
  );
}