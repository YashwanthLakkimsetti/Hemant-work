import React from "react";
import "./index.css";

function Status(){
    return(
        <div className="background">
            <div className="flexbox1">
                <div className="justify">
                    <h1 className="headingblack1">STP Category 1</h1>
                    <br/>
                    <text className="white">BWSSB</text>
                </div>
                <div className="vertical"></div>
                <div className="justify">
                    <h1 className="headingblack1">Plant address</h1>
                    <br/>
                    <text className="white">XYZ</text>
                </div>
                <div className="vertical"></div>
                <div className="justify">
                    <h1 className="headingblack1">Plant TYpe</h1>
                    <br/>
                    
                   
                    <text className="white">XYZ</text>
                </div>
                <div className="vertical"></div>
                <div className="justify">
                    <h1 className="headingblack1">Installed Capacity</h1>
                    <br/>
                    <text className="white">XYZ</text>
                </div>
                <div className="vertical"></div>
                <div className="justify">
                    <h1 className="headingblack1">Plant Status</h1>
                    <br/>
                    <text className="white">Active</text>
                    
                </div>

            </div>
        
        </div>
    )
}
export default Status;