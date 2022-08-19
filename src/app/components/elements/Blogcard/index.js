import React from 'react'

function BlogCard({blogs}) {
  return (
    <div className='flex flex-wrap justify-between items-center w-full gap-12 md:gap-0'>
             {
              blogs?.map((item,index)=>(
                <div
                 key={index}
                 className=" w-full md:w-[31%] rounded-lg overflow-hidden bg-white shadow-lg hover:-translate-y-3 duration-500 relative" 
                >
                  
                 <div className=' overflow-hidden h-56 w-full'>
                 <p className='absolute left-4 px-2 bg-secondary-color rounded-b-lg text-white z-20 py-1'>
                    {item.toptitle}
                  </p>
                    <img 
                     className='hover:scale-105 duration-500'
                    src={item.image} alt={item.subtitle} />
                 </div>
                  <div className='p-3 mt-2'>
                     <h3 className='font-bold mb-2 text-xl'>{item.title}</h3>
                     <p className='text-gray-500'>{item.date} . <span className='capitalize'> {item.subtitle}</span></p>
                  </div>
                </div>
              ))
             }
          </div>
  )
}

export default BlogCard