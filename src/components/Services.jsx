import { services } from "../assets/data/data"
import Service from "../utilities/Service"

const Services = () => {
  return (
    <section className="max-container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-9 mx-24">
      {services.map((service,index)=>{
        return  (<>
         <Service key={index} {...service}/>
        </>)
      })}
    </section>
  )
}

export default Services