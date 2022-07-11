import React from "react";
import Nav from "./Navbar";
import Seco from "./SecondRight";
import Sa from "./Sample"
function Second(){
    return(
        <div>
           <Nav />
           <div className="split left">

           <table>
           <tr>
                <td>
                <text>Treated water quamntity data</text>
                </td>
            </tr>
            <tr>
                <td>
                <text>PH</text><br/>
                <text>Detailed View</text>
                </td>
            </tr>
            <tr>
                <td>
                <text>Biochemical Oxygen Demand (BODS)</text><br/>
                <text>Detailed View</text>
                </td>
            </tr>
            <tr>
                <td>
                <text>Ammonical Nitrogen</text><br/>
                <text>Detailed View</text>
                </td>
            </tr>
            <tr>
                <td>
                <text>Totl Nitrogen (TN)</text><br/>
                <text>Detailed View</text>
                </td>
            </tr>
            <tr>
                <td>
                <text>Chemical Oxygen Demand (COD)</text><br/>
                <text>Detailed View</text>
                </td>
            </tr>
            <tr>
                <td>
                <text>Total Suspended Solids (TSS)</text><br/>
                <text>Detailed View</text>
                </td>
            </tr>
            <tr>
                <td>
                <text>Temperature</text><br/>
                <text>Detailed View</text>
                </td>
            </tr>
            <tr>
                <td>
                <text>Color</text><br/>
                <text>Detailed View</text>
                </td>
            </tr>
            <tr>
                <td>
                <text>Total Phosphorous (TP)</text><br/>
                <text>Detailed View</text>
                </td>
            </tr>
            <tr>
                <td>
                <text>Fecal Coliform</text><br/>
                <text>Detailed View</text>
                </td>
            </tr>
           </table>
           </div>
           <div className="split right">
            <Seco />
            <Sa className="Graph" />
           </div>
        </div>
    )
}
export default Second;