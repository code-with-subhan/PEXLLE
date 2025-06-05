// components/ui/CheckboxGroup.tsx
import React from 'react';

interface CheckboxOption {
  value: string;
  label: string;
}

interface CheckboxGroupProps {
  title: string;
  options: CheckboxOption[];
  selected: string[];
  onChange: (values: string[]) => void;
  className?: string;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  title,
  options,
  selected,
  onChange,
  className = '',
}) => {
  const handleCheckboxChange = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter(item => item !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  return (
    <div className={`checkbox-group ${className}`}>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <div className="flex flex-col gap-2">
        {options.map((option) => (
          <label key={option.value} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selected.includes(option.value)}
              onChange={() => handleCheckboxChange(option.value)}
              className="
                w-5 h-5 
                rounded 
                border-2 
                bg-white
                text-sm
                font-semibold
                border-gray-300 
                focus:ring-0
                focus:ring-offset-0
                focus:border-black
                checked:bg-black
                checked:border-black
                checked:hover:bg-black
                checked:focus:bg-black
                appearance-none
                relative
                after:absolute
                after:content-['']
                after:block
                after:w-1.5
                after:h-2.5
                after:border-r-2
                after:border-b-2
                after:border-r-white
                after:border-b-white
                after:left-1/2
                after:top-1/2
                after:transform
                after:-translate-x-1/2
                after:-translate-y-1/2
                after:rotate-30
                after:opacity-0
                checked:after:opacity-100
              "
            
            />
            <span className='font-semibold text-sm'>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CheckboxGroup;