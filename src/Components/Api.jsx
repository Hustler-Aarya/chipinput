import { useState, useEffect } from "react";

function Api() {
  const [texts, settexts] = useState([]);
  const [input, setinput] = useState("")
  const [chips, setchips] = useState([])

  useEffect(() => {
    const URL = `https://jsonplaceholder.typicode.com/users`;
    const todo = async () => {
      try {
        const data = await fetch(URL);
        const res =await data.json();
        settexts(res);
      } catch (error) {
        console.log(error);
      }
    };
    todo();
  }
  , []);

  const deletehandle=(index)=>{
    const copytext=[...texts]
    copytext.splice(index,1)
    settexts(copytext)
  }

  const addchip=(e)=>{
    if(e.key==='Enter' && input.trim() !==""){
      setchips(prev=>[...prev,input])
      setinput("")
    }
  }

  return <>
    {texts.map((text,index)=>(
      <div>
      <div className="p-4 m-4 bg-blue-600 rounded-xl flex flex-col w-25">
        <p>name:{text.name}</p>
        <p>id:{text.id}</p>
        <p>username:{text.username}</p>
        <p>address:{text.address.street}</p>
      </div>
      <button 
      onClick={()=>deletehandle(index)}
      className="text-red-700">X</button>
      </div>
    ))}

    <input type="text" placeholder="enter your value"
    value={input}
    onChange={(e)=>setinput(e.target.value)}
    onKeyDown={(e)=>addchip(e)}

    />

    {chips.map((chip,index)=>(
      <div>
        {chip}
      </div>
    ))}
  </>;
}
export default Api;
