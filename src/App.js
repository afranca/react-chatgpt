import { useState, useEffect } from "react";

const App = () => {
  const [value, setValue] = useState(null)
  const [message, setMessage] = useState(null)

  const getMessages = async () => {
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        model: "gpt-3.5-turbo",
        message: value
      })
    }
    try {
      console.log(`sending request to backend: ${options}`) 
      const response = await fetch('http://localhost:8000/completions', options)
      const data = await response.json()      
      setMessage(data.choices[0].message)
    } catch (error) {
      console.error(`Error from backend: ${error.message}`)
      console.error(error)
    }

  }

  return (
    <div className="app">   
      <section className="side-bar"> 
        <button>+ New Chat</button>        
        <ul className='history'> 
          <li>Alexandre</li>
        </ul>
        <nav>
          <p>Made by Ania</p>
        </nav>
      </section>

      <section className='main'>
      <h1>AniaGPT</h1>
        <ul className='feed'> 
            <li> feed goes in here</li>
        </ul>
        <div className="bottom-section">
          <div className="input-container">
            <input value={value} onChange={ (e)=> setValue(e.target.value)}/>
            <div id="submit" onClick={getMessages}> ➢ </div>
          </div>
          <p className="info">
              Powered by Chat GPT Mar 14 Version, a Free Research Preview.
          </p>
        </div>
      </section>
        


    </div>
  );
}

export default App;
