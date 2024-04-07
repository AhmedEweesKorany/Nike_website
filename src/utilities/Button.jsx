
const Button = ({label,iconUrl}) => {
if(!iconUrl){
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg sm:text-md leading-none bg-coral-red rounded-full text-white">
        {label}

    </button>
  )
}

return (
  <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white">
      {label}

      <img src={iconUrl} alt="arrow" className="ml-2 rounded-full w-5 h-5" />
  </button>
)
}

export default Button