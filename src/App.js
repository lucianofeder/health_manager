import "./App.css";
import Routes from "./routes";
import Input from "./components/Input";

const App = () => {
  return (
    <div className="App">
      <Routes />
      <Input placeholder="teste" name="teste" />
    </div>
  );
};

export default App;
