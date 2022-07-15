import React from "react";
import { stockData } from "./Stock";
import Sa from "./Sample";

const CardConfig  = [
    {
      component: "card",
      children: [
        {
          component: "img",
          src:
            "https://images.pexels.com/photos/2877188/pexels-photo-2877188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
          component: "body",
          children: [
            {
              component: "title",
              children: "This is a title"
            },
            {
              component: "subtitle",
              children: "This is the subtitle"
            },
            {
              component: "text",
              children:
                "Some quick example text to build on the card title and make up the bulk of the card's content."
            },
            {
              component: "button",
              children: "Click Me!"
            }
          ]
        }
      ]
    }
  ];
function Dynamic(){

 
    return(
        <div className="padding">
        <div className="flex2">
            {stockData.map((data, key) => {
                return(
                    <div className="paddingbox boxborder box">
                      <div className="flex2">
                        <div>
                        <h1 className="legend-title ">{data.widgetName}</h1> <br/>
                        <span className="heading">{data.value}&nbsp;{data.unit}</span><br/>
                       <span className="heading1">{data.limit.value} : {data.limit.unit} </span>
                     
                          </div>
                     
                     <div>
                      <Sa />
                     </div>

                        </div>
                        <div>
                        <Sa />

                        </div>
                       
                
                        
                    </div>
                )
            })}

        </div>
        </div>
    )
}

export default Dynamic;