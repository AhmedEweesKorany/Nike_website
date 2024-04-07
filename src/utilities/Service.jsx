
const Service = ({imgURL,label,subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px] shadow-3xl px-10 py-16 rounded-[20px]">
    <div className="w-11 h-11 rounded-full flex justify-center items-center bg-coral-red">
    <img src={imgURL} alt={label} />
    </div>
    <h2 className="text-xl font-palanquin font-bold my-3">{label}</h2>
    <p className="text-slate-gray font-montserrat leading-8">{subtext}</p>
</div>
  )
}

export default Service