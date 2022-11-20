import React from 'react';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';

const CartContainer = () => {
  return (
    <div className="fixed top-0 right-0 w-full md:w-375 h-[100vh] 
    bg-white drop-shadow-md flex flex-col z-[101]">
        
        <div className="w-full flex items-center justify-between p-4">
            <MdOutlineKeyboardBackspace />
        </div>

    </div>
  )
}

export default CartContainer