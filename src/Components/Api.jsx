import { useEffect,useState } from "react";

function Api() {

    const [users, setusers] = useState([])

  useEffect(() => {
    const todo = async () => {
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const res = await data.json();
        setusers(res)
      } catch (error) {
        console.log(error);
      }
    }
    todo();
  }, []);

  return (
    <>
      <h1 className="flex text-center font-bold text-4xl p-4 m-4">Users are as below</h1>
      <div>
        {users.map((user)=>
            <div key={user.id } className="p-4 m-4 border rounded-2xl shadow-sm hover:shadow-md transition bg-cyan-300">
            <p >user.name :{user.name}</p>
            <p>user.email :{user.email}</p>
            <p>user.address: {user.address.street}</p>
            <p>user.email {user.username}</p>
            
            </div>
        )}
      </div>
    </>
  );
}

export default Api;
