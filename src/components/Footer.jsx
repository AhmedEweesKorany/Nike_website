import { footerLinks, socialMedia } from "../assets/data/data"
import { footerLogo } from "../assets/images"
const Footer = () => {
  return (
    <section>
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 text-white gap-10">
      <div className="flex flex-col justify-start items-start">

        <img src={footerLogo} alt="footerLogo" />
        <p className="py-5 text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque incidunt officiis saepe at itaque sed cupiditate necessitatibus sit delectus ipsam.</p>
       <div className="flex justify-center items-center gap-6">
       {socialMedia.map((icon)=>{
          return (<>
          <img src={icon.src} alt={icon.alt} width={40} height={40} className="bg-white py-3 px-3 mt-6 rounded-full" key={icon.alt} />
          </>)
        })}
       </div>

      </div>

        {footerLinks.map((section)=>{
          return (<>
<div className="flex flex-col items-start justify-between" key={section.title}>
            <h2 className="text-2xl text-white font-bold">{section.title}</h2>
        {section.links.map((link)=>{
              return(<>
              <a href="/">{link.name}</a>
              </>)
            })}

</div>
          </>)
        })}
    </div>
      <hr className="my-5"/>
      <h3 className="text-white mt-5"> @allRightReseveed By:Ahmed Ewees</h3>
    </section>
  )
}

export default Footer