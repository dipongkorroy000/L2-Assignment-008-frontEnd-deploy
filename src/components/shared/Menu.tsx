import React from "react";

const Menu = ({setIsOpen}: {setIsOpen: React.FunctionComponent}) => {
  return (
    <button onClick={() => setIsOpen(1)} className="md:hidden text-primary focus:outline-none">
      ☰
    </button>
  );
};

export default Menu;
