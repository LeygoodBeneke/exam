import './App.css';
import Items from "../pages/items";
import Header from "../Components/Header";

function App() {

  return (
    <div className="App">
      <div className="Wrapper">
        <Header/>
        <Items/>
      </div>
    </div>
  );
}

export default App;
