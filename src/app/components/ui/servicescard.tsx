// 'use client';

// import React from 'react';
// import Image from 'next/image';

// interface ServicesCardProps {
//   imageSrc: string;
//   title: string;
//   description: string;
//   className?: string;
// }

// const ServicesCard: React.FC<ServicesCardProps> = ({ imageSrc, title, description, className }) => {
//   return (
//     <div className={`bg-white rounded-xl shadow-md p-4 w-[22%] flex-shrink-0 ${className}`}>
//       <Image src={imageSrc} alt={title} width={250} height={150} className="rounded-lg object-cover w-full relative" />
//       <div className='absolute bg-[#FFFFFF] py-2 px-3 rounded-[10px]'>
//       <h3 className="text-lg font-semibold mt-2">{title}</h3>
//       <p className="text-sm text-gray-600 mt-1">{description}</p>
//       </div>
    
//     </div>
//   );
// };

// export default ServicesCard;


'use client';

import React from 'react';
import Image from 'next/image';

interface ServicesCardProps {
  imageSrc: string;
  title: string;
  className?: string;
}

const ServicesCard: React.FC<ServicesCardProps> = ({ imageSrc, title,  className }) => {
  return (
    <div className={` w-64 flex-shrink-0 ${className}`}>
      
      <div className="relative w-full h-[346px] px-1.5 ">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="rounded-lg object-cover w-full "
        />
        
        <div className="absolute bottom-4 bg-white flex flex-col w-[95%] h-[84px] justify-center items-start px-4 rounded-lg mx-auto ">
        <h3 className="text-[16px] lg:text-[20px] font-[400] mt-2">{title}</h3>
        </div>
      </div>

    
    </div>
  );
};

export default ServicesCard;

