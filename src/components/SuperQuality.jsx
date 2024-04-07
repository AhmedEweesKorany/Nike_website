import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"
import Button from "../utilities/Button"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col ">
      <h1 className="mt-10 font-palanquin text-4xl capitalize max-sm:text-[72px] max-sm:leading-82 font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            We Provide You <span className=" capitalize text-coral-red inline-block mt-3">Super
          </span>
          </span>  <br /> <span className=" capitalize text-coral-red inline-block mt-3">
           Quality
          </span> shoes

        </h1>
        <p className=" font-montserrat test-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm text-slate-gray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          possimus labore similique, veniam hic repellat voluptatibus aliquid
          dolorem facere incidunt minima? Ut?

          <span className="block mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id doloremque tempore pariatur doloribus.
          </span>
        </p>  
<div className="w-25">
<Button label="View Details" />

</div>
      </div>

      <div className="bg-cover bg-card bg-center mt-20 rounded-3xl">
        <img src={shoe8} alt="superQuality" width={550} height={550} />
      </div>
       
    </section>
  )
}

export default SuperQuality