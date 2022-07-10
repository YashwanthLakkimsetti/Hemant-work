import React from "react";

import "./index.css";
import Horizontal from "./Horizontal";
function Input1(){
    return(
        <div>
        <div className="maincomp">

           <div className="Inputflex">
            <div>
                <text className="Inputclick">Treated&nbsp;water&nbsp;quality&nbsp;data</text>
            </div>
            <div>
                <text className="Inputclickstate">Flow&nbsp;meter&nbsp;data</text>
            </div>
            <div>
                <text className="Inputclickstate">Power&nbsp;Consumption</text>
            </div>
           </div>
           <br/>
          
           <div className="inputflexbox">
            <div>
                <form>
                <input type="text" className="search" placeholder="Search" />
                </form>
          
            <i aria-hidden="true" className="iconMdsp grid filled"></i>
            </div>
            <div className="box">
            <i aria-hidden="true" className="iconMdsp announcement"></i>
            </div>
            <div className="box">
            <span aria-hidden='true' className='iconMdsp update'></span>
            </div>
           
           
           </div>
           


               
        </div>
        <div>
            <Horizontal />
        </div>
      
        </div>
    )
}
export default Input1;