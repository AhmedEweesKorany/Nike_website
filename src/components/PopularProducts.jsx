import { products } from "../assets/data/data"
import PopularProductCard from "../utilities/PopularProductCard"

const PopularProducts = () => {
  return (
    <section className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
      <h2 className="text-4xl font-palanquin font-bold">
    Our <span className="text-coral-red">Popular</span> Products
      </h2>
      <p className="text-slate-gray font-montserrat ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, error illum.</p>

      </div>  
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14 sm:gap-5">
    {products.map((product)=>{
      return (<>
      <PopularProductCard key={product.name} {...product}/>
      </>)
    })}
      </div>
      
    </section>
  )
}

export default PopularProducts