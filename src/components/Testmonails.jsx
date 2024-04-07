import { reviews } from "../assets/data/data"
import { star } from "../assets/icons"

const Testmonails = () => {
  return (
    <section className="max-container "> 
<div className="flex justify-center items-center flex-col ">
<h3 className="mt-2 font-palanquin text-4xl capitalize max-sm:text-[72px] max-sm:leading-82 font-bold">
          What our <span className=" capitalize text-coral-red inline-block mt-3">customers 
          </span> says

        </h3>
        <p className=" font-montserrat test-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm text-slate-gray text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          possimus labore similique
        </p>  
</div>

<div className="grid lg:grid-cols-2 grid-cols-1 gap-20 my-10">
  {reviews.map((item)=>{
    return (<>
        <div className="flex flex-col justify-center items-center">
          <div>
            <img src={item.imgURL} width={150} height={150} className=" rounded-full" />
          </div> 
          <p className="text-slate-gray capitalize font-palanquin w-[350px] text-center my-5">{item.feedback}</p>
          <div className="flex justify-between items-center">
            <img src={star} alt="" width={24} height={24}  />
            <p className="text-slate-gray">({item.rating})</p>
          </div>
          <h3 className="text-2xl my-2 font-bold">{item.customerName}</h3>
        </div>
    </>)
  })}
</div>

    </section>
  )
}

export default Testmonails