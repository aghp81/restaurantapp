import React from 'react'

const MenuContainer = () => {
  return (
  <section className="w-full my-6" id="menu">
    <div className="w-full flex flex-col items-center justify-center">
        <p className="text-2xl font-semibold capitalize text-headingColor relative 
            before:absolute before:rounded-lg before:content before:w-16 before:h-1
            before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600
            transition-all ease-in-out
            duration-100 mr-auto">
              Our Hot Dishehs 
        </p>

        <div className="w-full flex items-center justify-start 
        lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
            <div className="group bg-white w-24 min-w-[94px] h-28 
            cursor-pointer rounded-lg drop-shadow-lg 
            flex flex-col gap-3 items-center justify-center 
            duration-150 transition-all ease-in-out">
                
            </div>
        </div>
    </div>
  </section>
  );
};

export default MenuContainer