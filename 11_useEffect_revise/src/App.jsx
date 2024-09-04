import React, { useEffect, useState } from 'react'
import Check from './Check'
import { nanoid } from 'nanoid';

function App() {

  const [input, setInput] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos").then((data) => {
      return data.json();
    }).then((Data) => {
      console.log("Data is: ", Data);
      const dataWriteIds = Data.map((value) => ({ ...value, _id: nanoid() }))
      setInput(dataWriteIds);
    });
  }, []);
  return (
    <>
      <h1 >Fetch Data!</h1>
      <div>
        {
          input.map((value) => {
            return <li key={value._id} className={`text-white
             my-2 list-none px-10
              ${value.completed ? 'bg-orange-400' : 'bg-blue-600'}
            `}>
              {value.title}
            </li>
          })
        }
      </div>
      <Check />
    </>
  )
}

export default App