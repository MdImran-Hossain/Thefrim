import React from "react";
import footerImg from "../assets/logo.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  const menuItem = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "Solutions",
    },
    {
      id: 3,
      name: "Cases",
    },
    {
      id: 4,
      name: "About Us",
    },
    {
      id: 5,
      name: "Blog",
    },
    {
      id: 6,
      name: "Contact Us",
    },
  ];
  const Icon = [
    {
      id: 1,
      Fb: <FaFacebookF />,
    },
    {
      id: 2,
      Fb: <FaTwitter />,
    },
    {
      id: 3,
      Fb: <FaYoutube />,
    },
    {
      id: 4,
      Fb: <FaLinkedinIn />,
    },
    {
      id: 5,
      Fb: <FaPinterestP />,
    },
  ];
  return (
    <>
      <footer className="pt-[350px] pb-8">
        <div className="container">
          <div className="flex justify-center items-center flex-col gap-10">
            <div>
              <picture>
                <img src={footerImg} alt="" />
              </picture>
            </div>
            <div className="flex items-center gap-10">
              <ul className="flex justify-center items-center  gap-12">
                {menuItem.map((menuItem) => {
                  return (
                    <li key={menuItem.id}>
                      <a
                        href="#"
                        className="menu text-[18px] font-bold font-Nunito text-font_color relative "
                      >
                        {menuItem.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
                <ul className="flex justify-center items-center gap-[44px]">
                    {
                        Icon.map((Icon)=>{
                            return(
                                <li key={Icon.id}>
                                    <a href="#" className="text-[25px] hover:text-button_color transition-all">{Icon.Fb}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <p className="text-[12px] font-Nunito font-normal text-[#a4a4a4]">Copyrights ©2020 Thefirm. All Right Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
