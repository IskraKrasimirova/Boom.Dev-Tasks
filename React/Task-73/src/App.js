import "./App.css";
import React, { useState, useEffect } from "react";
//import Counter from "./Counter.js";

function App() {
  const [count, setCount] = useState(1);
  useEffect(() => {
    document.title = `Count (${count})`;
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>Count ({count})</button>
  );
}

// //Validator gives errors
// function App() {
//   return (
//     <div className="App">
//       <section class="hero">
//         <div class="hero-body">
//           <p class="title">A React Task</p>
//           <p class="subtitle">by Boom.dev</p>
//         </div>
//       </section>
//       <div class="container is-fullhd">
//         <div class="notification">
//           <Counter />
//         </div>
//       </div>
//     </div>
//   );
// }

export default App;