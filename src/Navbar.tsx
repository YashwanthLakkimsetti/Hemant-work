import React from "react";
import "./index.css";

function NavBar(){
    return(
        <div>

            <div className="company">
                <div>
                <h1 className="headingblack">SIEMENS</h1>
                </div>
               
                <div className="right">
               <div className="padding">
               <i aria-hidden="true" className="iconMdsp grid"></i>
<i aria-hidden="false" className="iconMdsp grid bold"></i>
<i aria-hidden="true" className="iconMdsp grid filled"></i>
               </div>
               <div className="padding">
               <span aria-hidden='true' className='iconMdsp person filled'><span className="Profile">User name<br/>Role</span></span>
               </div>
               <div className="padding">
                   <h1 className="Profile">bell</h1> 
               </div>
                </div>
             
             
            </div>

        </div>
    )
}
export default NavBar;