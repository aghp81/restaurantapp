import React, { useEffect, useState } from 'react';
import {IoFastFood} from "react-icons/io5";
import {categories} from "../utils/data";

const MenuContainer = () => {

    const [filter, setFilter] = useState("chicken");

    useEffect(() => {}, [filter]);

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
            {categories && categories.map(category => (
                <div key={category.id} 
                className={`group ${filter === category.urlParaName ? 'bg-cartNumBg' : 'bg-card'} w-24 min-w-[94px] h-28 
                cursor-pointer rounded-lg drop-shadow-xl 
                flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg
                duration-150 transition-all ease-in-out`}
                onClick={() => setFilter(category.urlParaName)}
                >
                    <div className={`w-10 h-10 rounded-full shadow-lg ${filter === category.urlParaName ? 'bg-white' : 'bg-cartNumBg'}
                    group-hover:bg-white flex items-center justify-center`}>
                        <IoFastFood 
                            className={`${filter === category.urlParaName ? 'text-textColor' : 'text-white'} group-hover:text-textColor text-lg`}
                        />
                    </div>
                    <p className={`text-sm ${filter === category.urlParaName ? 'text-white' : 'text-textColor'} group-hover:text-white`}>
                        {category.name}
                    </p>
                </div>
            ))}
        </div>
    </div>
  </section>
  );
};

export default MenuContainer