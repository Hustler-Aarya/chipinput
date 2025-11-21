import { useState,useEffect } from "react";

function Home(){

const [input, setinput] = useState("");
  const [chips, setchips] = useState([]);

  const handlekeydown = (e) => {
    if (e.key === "Enter" && input.trim() !=="") {
      //add input to the chip
      setchips(prev=>[...prev,input])
      setinput("")
    }
  };

  const deletechip=(index)=>{
      //remove chips 
      const copychips=[...chips]
      copychips.splice(index,1);
      setchips(copychips)
  }
// save the data localstorage
  // Save chips whenever they change
useEffect(() => {
  localStorage.setItem("chips", JSON.stringify(chips));
}, [chips]);

// Load chips when page loads
useEffect(() => {
  const saved = localStorage.getItem("chips");
  if (saved) {
    setchips(JSON.parse(saved));
  }
}, []);
  

  return (
    <>
      <div className="container text-center">
        <h1 className="text-white text-2xl p-4 m-10 bg-cyan-400 font-bold">
          Chip Collection
        </h1>
        <input
          className=" p-3 m-2"
          type="text"
          placeholder="Enter your value"
          value={input}
          onChange={(e) => setinput(e.target.value)}
          onKeyDown={(e) => handlekeydown(e)}
        />

        <div className="flex justify-center ">
          {chips.map((chip,index) => (
            <div className="flex items-center" key={chip}>
              <div className="bg-blue-300 p-4 text-white m-3 rounded-2xl">{chip}</div>
              <button onClick={()=>{deletechip(index)}} className="text-red-600 font-bold">X</button>
            </div> 
          ))}
          
        </div>
      </div>
    </>
  );
}


export default Home;