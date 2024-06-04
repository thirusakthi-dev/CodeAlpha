import { ThemeProvider } from "./components/ThemeContext";
import Main from "./components/Main";
import "./styles/Index.scss";

function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}

export default App;
