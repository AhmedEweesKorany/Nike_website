import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../utilities/Button"

const SpecailOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container"> 
  <div className="flex-1">
    <img src={offer} alt="offerImg" width={773} height={687} className="object-contain w-full" />
  </div>
  <div className="flex flex-1 flex-col ">
      <h1 className="mt-10 font-palanquin text-4xl capitalize max-sm:text-[72px] max-sm:leading-82 font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
           <span className=" capitalize text-coral-red inline-block mt-3">Special
          </span> offer
          </span> 

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
<Button label="Shop Now" iconUrl={arrowRight}  />

</div>
      </div>
    </section>
  )
}

export default SpecailOffer