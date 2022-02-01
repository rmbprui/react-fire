import { useState, useEffect } from "react";
import { ref, onValue, set } from "firebase/database";

import { db } from "./db/firebase";

function App() {
  const [value, setValue] = useState();

  useEffect(() => {
    const counter = ref(db, "counter");
    onValue(counter, (snapshot) => {
      const data = snapshot.val();
      setValue(data.value);
    });
  }, []);

  const updateCounter = (n) => {
    set(ref(db, "counter"), {
      value: n,
    });
  };

  return (
    <main>
      <h1 className="title">Counter</h1>
      <div className="counter">
        <button className="btn minus" onClick={() => updateCounter(value - 1)}>
          <i className="fas fa-minus" />
        </button>
        <p className="value">{value}</p>
        <button className="btn plus" onClick={() => updateCounter(value + 1)}>
          <i className="fas fa-plus" />
        </button>
      </div>
    </main>
  );
}

export default App;
