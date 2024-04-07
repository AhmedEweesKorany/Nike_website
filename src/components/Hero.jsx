import { useState } from "react";
import { shoes, statistics } from "../assets/data/data";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../utilities/Button";
import ShowCard from "../utilities/ShowCard";

const Hero = () => {
  const [bigShowImg,setBigShowImg] = useState(bigShoe1)
  return (
    <section
      id="home"
      className="w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container "
    >
      <div className="relative xl:w-2/5 flex flex-col items-start justify-center w-full max-xl:padding-x pt-28  ">
        <p className="text-xl font-montserrat text-coral-red mt-10 ">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl capitalize max-sm:text-[72px] max-sm:leading-82 font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arraval
          </span>
          <br />
          <span className=" capitalize text-coral-red inline-block mt-3">
            nike{" "}
          </span>
          shoes
        </h1>
        <p className=" font-montserrat test-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          possimus labore similique, veniam hic repellat voluptatibus aliquid
          dolorem facere incidunt minima? Ut?
        </p>

        <Button label="Shop now" iconUrl={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => {
            return (
              <>
                <div key={index}>
                  <p className="text-4xl font-bold font-palanquin">
                    {stat.value}
                  </p>
                  <p className="text-slate-gray font-montserrat leading-7">
                    {stat.label}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className=" relative flex  justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShowImg}
          alt="shoe collecetion"
          width={600}
          height={500}
          className="relative object-contain z-10"
        />
        <div className="flex absolute gap-5 -bottom-[-5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe)=>{
            return (<>
            <div key={shoe}>
                <ShowCard imgUrl={shoe} changeImg={(e)=>{
                  setBigShowImg(e)
                }} bigShowImg={bigShowImg}/>
            </div>  
            </>)
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
