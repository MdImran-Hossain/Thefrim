import React from "react";
import CommonHead from "./commonCommponet/CommonHead";
import Button from "./commonCommponet/Button";
const Touch = () => {
  const InputContent = [
    {
      id: 1,
      Labe: "Name",
      Plac: "Enter your name",
    },
    {
      id: 2,
      Labe: "Email",
      Plac: "Enter your Email",
    },
    {
      id: 3,
      Labe: "Phone",
      Plac: "Enter your Phone-Number",
    },
    {
      id: 4,
      Labe: "Subject",
      Plac: "Choose your subject",
    },
  ];
  return (
    <>
      <section className="bg-[url(./assets/map.png)] p-[195px] relative">
        <div className="container">
          <div className="w-[938px] p-[60px] bg-white_color rounded-xl flex flex-col justify-center items-center absolute top-[43%] left-[50%] translate-x-[-50%] shadow-xl">
            <div>
              <CommonHead headingContent={"Get in "} HlastContent={"Touch"} />
            </div>
            <div className="flex justify-between flex-wrap">
              {InputContent.map((InputContent) => {
                return (
                  <div
                    key={InputContent.id}
                    className="flex flex-col flex-wrap pb-10"
                  >
                    <label className="text-[14px] font-Nunito font-normal text-[#A5A5A5]">
                      {InputContent.Labe}
                    </label>
                    <input
                      type="text"
                      className="p-2 bg-transparent border-b-2 border-[#A5A5A5] text-[18px] font-bold font-Nunito text-font_color w-[350px]"
                      placeholder={InputContent.Plac}
                    />
                  </div>
                );
              })}
            </div>
            <Button buttonContent={"Submit"}/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Touch;
