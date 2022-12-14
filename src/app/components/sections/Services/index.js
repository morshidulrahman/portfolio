import React from 'react'
import {SectionTitle} from "../../elements/index"
import {ServiceData} from "../../../data/Services"
import Service from '../../elements/Services'

function Services() {

   const{services}=ServiceData

  return (
    <section className='container element md:h-screen h-auto' name="services">
       <div>
         <SectionTitle title='services'/>
       </div>
        <div className=' w-full flex flex-wrap items-center md:justify-start pt-8 gap-10 justify-between'>
           {
            services.map((item,index)=>(
              <Service key={index} {...item}/>
            ))
           }
        </div>
        <p className='text-center text-md pt-16'>
        Looking for a custom job? <span className='text-[#FF4C60] duration-300 hover:text-[#454360]'>Click here</span> to contact me! 👋
        </p>
    </section>
  )
}

export default Services