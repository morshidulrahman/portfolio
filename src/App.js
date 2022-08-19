import { useState } from "react";
import { Sidebar,Home,About,Blog,Contact,Testimonial,Portfolio,Pricing,Resume,Services} from "./app/components/sections/index";

function App() {
   const[open,setopen]=useState(false)
   const handleclick=()=>{
    setopen(!open)
   }
  return (
      <div className="bg-[#F9F9FF]">
        <Sidebar onClick={handleclick} open={open}/>
        <div className={`md:ml-32 ${open && "ml-32"} duration-300`}>
            <Home/>
            <About/>
            <Services/>
            <Resume/>
            <Portfolio/>
            <Pricing/>
            <Testimonial/>
            <Blog/>
            <Contact/>
        </div>
      </div>
  );
}

export default App;
