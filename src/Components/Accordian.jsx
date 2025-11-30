import { useState,useEffect } from "react";


function Accordian(){
    const [toggle, settoggle] = useState(false)

    const open=()=>{
        settoggle(!toggle)
    }

    return (
        <>
        <div className="m-4 p-4 flex flex-col">
            <div className="bg-amber-900 m-4 text-white h-12"
            onClick={open}
            >hello</div>
            {toggle && (
                <div>
                    <p>hello how are you</p>
                </div>
            )}
            <div className="bg-amber-900 m-4 text-white h-12">hello</div>
            <div className="bg-amber-900 m-4 text-white h-12">hello</div>
            
            
            

        </div>

        </>
    )
}

export default Accordian;