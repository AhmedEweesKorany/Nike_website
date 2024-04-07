import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../assets/data/data";


const Navbar = () => {

  const [open,setOpen] = useState(false)
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} width={130} height={29} alt="logo" />
        </a>
   <ul className= "flex justify-end items-center ml-60 max-lg:hidden gap-16 ">
          {navLinks.map((item) => {
            if(item.label == "Sign In / Explore now "){
              return (
                <>
                  <li key={item.label}>
                    <a href={item.href} className=" font-montserrat leading-normal text-lg text-slate-gray font-bold"> {item.label}</a>
                  </li>
                </>
              );
            }
            return (
              <>
                <li key={item.label}>
                  <a href={item.href} className=" font-montserrat leading-normal text-lg text-slate-gray"> {item.label}</a>
                </li>
              </>
            );
          })}
        </ul>

        <div>
          <img src={hamburger} alt="hamburger" width={25} height={25} className= " hidden max-lg:block cursor-pointer" onClick={() => {setOpen(!open)}} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
