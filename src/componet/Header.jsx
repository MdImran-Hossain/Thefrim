import React from "react";
import logo from "../assets/logo.png";
import Button from "./commonCommponet/Button";
function Header() {
    const menuItem=[
        {
            id:1,
            name:"Home",
        },
        {
            id:2,
            name:"Solutions",
        },
        {
            id:3,
            name:"Cases",
        },
        {
            id:4,
            name:"About Us",
        },
        {
            id:5,
            name:"Blog",
        },
        {
            id:6,
            name:"Contact Us",
        }
    ]
  return (
    <>
      <div className=" p-4">
        <div className="container">
          <div className="flex justify-between items-center">
            <div>
              <picture>
                <img src={logo} alt="{logo}" />
              </picture>
            </div>
            <div className="flex items-center gap-10">
                <ul className="flex justify-center items-center  gap-12">
                    {
                        menuItem.map((menuItem)=>{
                            return(
                                <li key={menuItem.id}>
                                    <a href="#" className="menu text-[18px] font-bold font-Nunito text-font_color relative ">{menuItem.name}</a>
                                </li>
                            )
                        })
                    }
                </ul>
                
                <Button
                    buttonContent="Get in Touch"
                    buttonDesing={"btn px-5 py-2 rounded  text-[18px] font-bold font-Nunito text-font_color border-2 border-button_color"}
                 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
