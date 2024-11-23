import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Blog", path: "/blog" },
  ];

  return (
    <nav>
      <div className=" md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open === true ? (
          <AiOutlineClose></AiOutlineClose>
        ) : (
          <AiOutlineMenu></AiOutlineMenu>
        )}
      </div>

      <ul
        className={`md:flex duration-1000 absolute md:static  text-2xl font-bold 
            ${open ? "top-14" : "-top-60"}
          bg-slate-700 p-`}
      >
        {routes.map((route) => (
          <li
            className="mr-40 hover:bg-slate-900 p-2"
            key={route.id}
          >
            <a href={route.path}>{route.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
