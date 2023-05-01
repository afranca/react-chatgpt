import { useState, useEffect } from "react";

const App = () => {
  const [value, setValue] = useState(null)
  const [message, setMessage] = useState(null)
  const [chatHistory, setChatHistory] = useState([])
  const [currentTitle, setCurrentTitle] = useState(null)

  const createNewChat = (e) => {
    setCurrentTitle(null)  
    setMessage(null)  
    setValue("")
  }

  const handleTitleSelection = (selectedTitle) => {
    setCurrentTitle(selectedTitle)
    setMessage(null)  
    setValue("")
  }  

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

  useEffect( ()=>{
    console.log(currentTitle, value, message);
    if (!currentTitle && value && message){
      setCurrentTitle(value)
    }
    if (currentTitle && value && message){
      setChatHistory(
        prevChats => (
          [...prevChats, 
            { title: currentTitle, role: "user", content: value }, 
            { title: currentTitle, role: message.role, content: message.content }
          ]
        )
      )
    }    
  },[message, currentTitle, value]);

  const currentChat = chatHistory.filter( prevChat => prevChat.title === currentTitle)
  const uniqueTitles = Array.from(new Set(chatHistory.map(prevChat => prevChat.title)))
  return (
    <div className="app">   
      <section className="side-bar"> 
        <button onClick={createNewChat}>+ New Chat</button>        
        <ul className='history'> 
          {uniqueTitles?.map( (title, index) =>
            <li key={index} onClick={() => handleTitleSelection(title)}>{title} </li>
          )}
        </ul>
        <nav>
          <p>Made by Ania</p>
        </nav>
      </section>

      <section className='main'>
        {!currentTitle && <h1>AniaGPT</h1>}
        <ul className='feed'>             
            {currentChat?.map( (chatMessage, index) => <li key={index}> 
              <p className="role">{chatMessage.role}</p>
              <p className="chatContent">{chatMessage.content}</p>
            </li>)}
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
