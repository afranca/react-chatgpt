const App = () => {
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
            <input />
            <div id="submit"> ➢ </div>
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
