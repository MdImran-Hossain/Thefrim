import React from "react";
import CommonHead from "./commonCommponet/CommonHead";
import BlogImg1 from "../assets/blog/blogs1.png";
import BlogMan1 from "../assets/blog/man1.png";
import Button from "./commonCommponet/Button";
import BlogImg2 from "../assets/blog/blogs2.png";
import BlogMan2 from "../assets/blog/man2.png";
import BlogImg3 from "../assets/blog/blogs3.png";
import BlogMan3 from "../assets/blog/man3.png";
import Blogcard from "./commonCommponet/Blogcard";
const Blogs = () => {
  const carditem=[
    {
      id:1,
      BlogImg:BlogImg1,
      TItle:"Lorem Ipsum is ",
      Sumary:"Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. ",
      Man:BlogMan1,
      Name:'Alex Liones',
      Date:"28,Aug 2020, 09:48:00",
      Btn:"Read More"
    },
    {
      id:2,
      BlogImg:BlogImg2,
      TItle:"Lorem Ipsum is ",
      Sumary:"Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. ",
      Man:BlogMan2,
      Name:'Alex Liones',
      Date:"28,Aug 2020, 09:48:00",
      Btn:"Read More"
    }
    ,{
      id:3,
      BlogImg:BlogImg3,
      TItle:"Lorem Ipsum is ",
      Sumary:"Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. ",
      Man:BlogMan3,
      Name:'Alex Liones',
      Date:"28,Aug 2020, 09:48:00",
      Btn:"Read More"
    }
  ]

  return (
    <>
      <section className=" bg-secend_bgcolor p-[80px] ">
        <div className="container ">
          <div className="flex justify-center">
            <CommonHead headingContent={"Our "} HlastContent={"Blogs"} />
          </div>
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="flex justify-center gap-[72px] items-center pt-14">
             {
              carditem.map((carditem)=>{
                return(
                  <div key={carditem.id}>
                    <Blogcard BlogImg={carditem.BlogImg} Title={carditem.TItle} Sumary={carditem.Sumary} ManImg={carditem.Man} Name={carditem.Name} Date={carditem.Date} Btn={carditem.Btn}/>
                  </div>
                )
              })
             }
            </div>
                <Button buttonContent={'View More'}/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
