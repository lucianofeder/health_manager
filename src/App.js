import "./App.css";
import Routes from "./routes";

// Colocada proximo ao topo da árvore para facilitar renderização do Modal em todas as páginas
import { ModalProvider } from "styled-react-modal";

const App = () => {
  return (
    <div className="App">
      <ModalProvider>
        <Routes />
      </ModalProvider>
    </div>
  );
};

export default App;
