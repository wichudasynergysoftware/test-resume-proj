import { ThemeProvider } from "@mui/material";
import Home from "./components/Home";
import theme from "./theme";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
