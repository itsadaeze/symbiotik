// 'use client';

// import React from 'react';

// interface ContactButtonProps {
//   onClick?: () => void;
//   className?: string;
// }

// const ContactButton: React.FC<ContactButtonProps> = ({ onClick, className = '' }) => {
//   return (
//     <button
//       onClick={onClick}
//       className={`bg-[#0F7BFF] border text-[16px] border-[#0F7BFF] text-white px-6 py-3 rounded-full flex items-center gap-1 hover:bg-[#1c2837] transition-all duration-300 ${className}`}
//     >
//       Contact Us
//     </button>
//   );
// };

// export default ContactButton;



'use client';

import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  className?: string;  
}

const Button: React.FC<ButtonProps> = ({
  text,
  textColor = '',
  bgColor = '',
  borderColor = '',
  hoverBgColor = '',
  hoverTextColor = '',
  className = '',
  onClick,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'px-6 py-2 rounded-full flex items-center gap-1 transition-all duration-300',
        textColor,
        bgColor,
        borderColor,
        hoverBgColor,
        hoverTextColor,
        className
      )}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;

