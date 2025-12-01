interface CheckboxItemProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (id: string, checked: boolean) => void;
  disabled?: boolean;
}

export function CheckboxItem({ id, label, checked, onChange, disabled }: CheckboxItemProps) {
  return (
    <div className="h-[40px] flex items-center px-[12px] border-b border-[#e3e3e3] last:border-b-0">
      <label className="flex items-center gap-[12px] cursor-pointer w-full">
        <div className="relative flex-shrink-0">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(id, e.target.checked)}
            disabled={disabled}
            className="sr-only"
          />
          <div className={`w-[16px] h-[16px] rounded-[2px] border border-[#a08dda] flex items-center justify-center transition-colors ${
            checked ? 'bg-[#a08dda]' : 'bg-white'
          } ${disabled && !checked ? 'opacity-50 cursor-not-allowed' : ''}`}>
            {checked && (
              <svg className="w-[10px] h-[7px]" fill="none" viewBox="0 0 11 8">
                <path d="M1 4L4 7L10 1" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            )}
          </div>
        </div>
        <span className={`font-['Poppins'] text-[12px] text-[#464254] font-normal ${disabled && !checked ? 'opacity-50' : ''}`}>
          {label}
        </span>
      </label>
    </div>
  );
}