import React from "react";

function NavBar() {
  const navLinks = ["Service", "Our Work", "About Us", "Insights"];
  return (
    <div className=" w-full px-20 py-8">
      <div className="logo">
        <h2 className=" text-3xl font-bold">Motion</h2>
      </div>
      <div className="links">
        {navLinks.map((item, index) => (
          <a key={index} className="text-md font-semibold">{item}</a>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
