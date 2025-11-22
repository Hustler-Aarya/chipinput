import { useState, useEffect } from "react";

function React() {
  const [users, setusers] = useState([]);

  useEffect(() => {
    const todo = async () => {
      try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const res = await data.json();
        setusers(res);
      } catch (error) {
        console.log(error);
      }
    };
    todo();
  }, []);

  const deletetodo=(index)=>{
    const copyusers=[...users]
    copyusers.splice(index,1)
    setusers(copyusers);

  }

  return <>
  {users.map((user,index)=>(
    <div className="m-4 p-4 bg-cyan-300 font-bold font-serif flex flex-col items-center rounded-2xl w-80">
        <p>user ID : {user.id}</p>
        <p>user name : {user.name}</p>
        <p>user username : {user.username}</p>
        <p>user email : {user.email}</p>
        <p>user address : {user.address.street}</p>
        <button 
        onClick={()=>(deletetodo(index))}
        className="text-red-600 bg-white">X</button>
    </div>
  ))}
  
  </>;
}

export default React;
