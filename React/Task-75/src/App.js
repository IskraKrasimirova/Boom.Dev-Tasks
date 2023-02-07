import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState(() => {
    return localStorage.getItem('note') || '';
  });

  useEffect(() => {
    localStorage.setItem('note', text)
  }, [text]);

  const onChange = (ev) => setText(ev.target.value);

  return (
    <div className="App">
      <div className="box">
        <div className="field">
          <div className="control">
            <textarea className="textarea is-large" placeholder="Notes..." value={text} onChange={onChange} />
          </div>
        </div>
        <button className="button is-large is-primary is-active" onClick={() => localStorage.setItem('note', text)}>
          Save
        </button>
        <button className="button is-large" onClick={() => setText('')}>Clear</button>
      </div>
    </div>
  );
}

export default App;
