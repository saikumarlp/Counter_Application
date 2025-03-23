import React from "react";
import { useState } from "react";


function Counter(){
    const [count,setCount] = useState(0);
    return(
        <div>
            <h1 style={{color:'red',textAlign:'center',marginTop:'180px'}}>The Counter Application : {count}</h1>
        <div style={{textAlign:'center'}}>
        <button onClick={() => setCount(count + 1)}
            style={{color:'white',textAlign:'center',marginTop:'auto',marginRight:"auto",height:'30px',backgroundColor:'green',paddingLeft:'20px',paddingRight:'20px',height:'30px',}}>Increase</button>
            <button onClick={() => 
                setCount(
                    count - 1)
                }
            style={{color:'white',textAlign:'center',marginTop:'auto',marginRight:"auto",paddingLeft:'20px',paddingRight:'20px',height:'30px',backgroundColor:'green'}}
            >Decrease</button>
            <button 
            onClick={() =>
                setCount(0)
            }
            style={{color:'white',textAlign:'center',marginTop:'auto',marginRight:"auto",paddingLeft:'20px',paddingRight:'20px',height:'30px',backgroundColor:'green'}}
            >Reset</button>
            </div>
        </div>
    );

}

export default Counter;