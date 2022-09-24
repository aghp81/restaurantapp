import React from "react";
import Logo from "./img/logo.png";

const Header = () => {
    return (
        <header className="fixed z-50 w-screen p-6 px-16">
            {/* desktop & tablet */}
            <div className="hidden md:flex w-full h-full">
                <div className="flex item-center gap-2">
                    <img src={Logo} className="w-8 object-cover" alt="logo" />
                    <p className="text-headingColor text-xl font-bold">City</p>
                </div>

                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>About Us</li>
                    <li>Service</li>
                </ul>
            </div>


            {/* mobile */}
            <div className="flex md:hidden w-full h-full"></div>
        </header>
    )
}

export default Header 