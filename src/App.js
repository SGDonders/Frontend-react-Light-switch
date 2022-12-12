import React, {useState} from 'react';
import './App.css';

function App() {
    const [ light, toggleLight] = useState(false)

  return (
      <main className={light === true ? 'on' : 'off'}>
        <section>
          <div className="dot"></div>
          <button type="button"
                  onClick={() => toggleLight(!light)}>
              {light
                  ? <p>Turn off</p>
                  : <p>Turn on</p>}
              </button>
        </section>
      </main>
  );
}

export default App;