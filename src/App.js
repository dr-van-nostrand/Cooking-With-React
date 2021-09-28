import React, { useState } from "react";
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";

export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState("blue");

  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      First Counter
      <Counter initialcount={100} />
      <br />
      Second Counter Hooks
      <CounterHooks initialCounter={10} />
      <button
        onClick={() =>
          setTheme((prevTheme) => {
            return prevTheme === "blue" ? "tomato" : "blue";
          })
        }
      >
        color
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
