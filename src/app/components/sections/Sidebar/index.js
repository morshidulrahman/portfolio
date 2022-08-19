import { sidebar } from '../../../data/sidebar'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';
import { Link} from 'react-scroll'

function Sidebar({onClick,open}) {  
   const {logo,menus}=sidebar
    console.log(open)
  return (
      <> 
          <div
         onClick={onClick}
          className={`md:hidden duration-300 text-3xl top-4 left-7 z-10 fixed bg-white shadow-sm rounded-sm ${ open && "left-28"}`}>
             {
               open ? <AiOutlineClose/> :  <AiOutlineMenu/>
             }
            
          </div>
          <div className={`duration-300 flex fixed top-0  p-8 md:flex w-28 h-screen  flex-col justify-between border-r border-r-[#eceaeac0] ${ open ? "left-0 z-10 ":"-left-40"} md:left-0`}>    
        <Link
         to="home"
         spy={true} 
         smooth={true}    
         duration={500}
        >
           <img src={logo} alt="logo"/>
        </Link>
         <div className='flex flex-col gap-8'>
             {menus?.map((item,index)=>(
              <Link
               spy={true}
               smooth={true}            
               duration={500}
               to={item.to}
               activeClass="nav_active"
               className='text-2xl text-gray-700 duration-300 hover:text-secondary-color'
               key={index}
               >
                {item.icon}</Link>
             ))}
         </div>
          <div className='copyright text-gray-500'>
             <span>&copy; 2022-2023</span>
          </div>
    </div>
      </>
  )
}

export default Sidebar