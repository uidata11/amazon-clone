import { useState } from "react";
import { TextInput } from "./ui";
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div>
      <h1>App</h1>
      <TextInput.Input className="input-my input" />
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
};

export default App;
