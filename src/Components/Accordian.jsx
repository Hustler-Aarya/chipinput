import { useState,useEffect } from "react";


function Accordian(){
    const addtodo=()=>{
        <p>
            hello 
        </p>
    }

    return (
        <>
        <div className="m-4 p-4 flex flex-col">
            <div className="bg-amber-900 m-4 text-white h-12"
            onClick={()=>(addtodo(e))}
            >hello</div>
            <div className="bg-amber-900 m-4 text-white h-12">hello</div>
            <div className="bg-amber-900 m-4 text-white h-12">hello</div>
            
            
            

        </div>

        </>
    )
}

export default Accordian;