// in this ann added page by me
// I was trying to learn the concept of useState and useEffect in client component
// the client will write the number in the input, the name of the fetched user occures



'use client';
import React, { useEffect, useState } from "react";

interface User{
  id: number;
  name: string;
}

export default function Users2() {

  const [query, setQuery] = useState('');
  const [user, setUser] = useState<User>({ id: 1 , name: 'null'});


  useEffect(() => {
    try {
      const fetchInputedUser = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${query}`);
        const fetchedUser = await res.json();
        if (!res.ok) {
          alert(`No user exists with the index: ${query}`)
        }else{
          setUser(fetchedUser);
        }
        
      }
      fetchInputedUser();
    }catch(e){
      alert(e)
    }

  }, [query])



  return (
    <div>

      <br />
      <hr />
      <input
        type="number"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <hr />

      <br />
      <h1>Index: {query}</h1>
      <h1>{user.name}</h1>


    </div>
  )
}
