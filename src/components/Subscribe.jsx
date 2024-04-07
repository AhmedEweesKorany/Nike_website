import Button from '../utilities/Button'

const Subscribe = () => {
  return (
    <section className='max-container'>
      <div className='flex justify-between items-center flex-wrap'>
      <h1 className="mt-10 font-palanquin text-4xl capitalize max-sm:text-[72px] max-sm:leading-82 font-bold">
           Sign Up for <span className=" capitalize text-coral-red inline-block mt-3">Updates
          </span> <br />& newsletter

        </h1>
        <div className='mt-10 flex justify-between items-center gap-5'>
          <input type="email" placeholder='Enter Your Email' className='w-[350px] border border-stone-900 px-10 py-4 rounded-full' />
          <Button label={"Subscribe Now!"}/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe