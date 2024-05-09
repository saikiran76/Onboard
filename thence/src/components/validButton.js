/**
 * Submit button component for Onboarding form 
 */

import React, { forwardRef, useImperativeHandle } from 'react'; 
import { useState } from 'react';
import { IoMdAlert } from "react-icons/io";

export const ValidButton = forwardRef(({ bgColor, textColor, name, disabled, error, width }, ref) => {
  // to keep track of the hovering of the submit button
  const [isHovering, setIsHovering] = useState(false); 

  useImperativeHandle(ref, () => ({
    focus: () => {
      console.log('hovering...')
      setIsHovering(true)
    }, 
  }));

  return (
    <div
      className={`${bgColor} rounded-3xl p-4 ${disabled ? 'opacity-50 cursor-pointer' : width} h-12 mb-2 ${
        textColor
      } ${isHovering && disabled ? 'hover:bg-zinc-900 hover:text-zinc-900 duration-200 delay-100 cursor-pointer' : ''}cursor-pointer hover:bg-gray-900`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <p className="text-sm text-center font-man text-white">{name}</p>
      {error && <p className="text-red-600 text-xs ml-2 mt-3 font-semibold flex gap-2 items-center"><span className='inline'><IoMdAlert /></span>{error}</p>}
    </div>
  );
});
