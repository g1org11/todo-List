import "./App.css";

import TodoContainer from "./components/TodoContainer";
import GlobalStyles from "./components/GlobalStyling";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <TodoContainer></TodoContainer>
    </div>
  );
}

export default App;
