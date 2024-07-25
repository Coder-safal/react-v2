import { useCallback, useEffect, useRef, useState } from 'react'

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [input, setInput] = useState("");

  const inputRef = useRef(null);


  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSabcdefghijklmnopqrstuvwxyzTVWXYZ";

    if (charAllowed) str += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

    if (numberAllowed) str += "0123456789";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setInput(pass);
    // console.log(pass);
  }, [length, charAllowed, numberAllowed]);

  const copytoClipboard = useCallback(() => {

    inputRef.current.select();
    inputRef.current.setSelectionRange(0, length-1);
    navigator.clipboard.writeText(input);
  }, [input]);


  useEffect(() => {
    PasswordGenerator();
  }, [length, numberAllowed, charAllowed])

  return (
    <>
      <div className='w-full max-w-md bg-gray-800 px-5 py-3
       text-white mx-auto mt-6 rounded-xl'>
        <h1 className='text-center py-2'>Password Generator</h1>
        <div className='bg-white flex'>
          <input
            type="text"
            value={input}
            readOnly
            placeholder='password'
            ref={inputRef}
            className='w-full outline-none px-2 py-2 text-black'
          />
          <button
            onClick={copytoClipboard}
            className='bg-blue-600 px-5'
          >
            Copy
          </button>
        </div>
        <div
          className='w-full flex justify-around py-2'
        >
          <div>
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className='cursor-pointer'

            />
            <label className='pl-2' >length:{length}</label>
          </div>

          <div>
            <input type="checkbox"
              defaultChecked={numberAllowed}
              onChange={(prev) => setNumberAllowed((prev) => !prev)}
              className='text-black size-4'
            />
            <label className='pl-2' >Number</label>
          </div>

          <div>
            <input type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              className='size-4'
            />
            <label className='pl-2'>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
