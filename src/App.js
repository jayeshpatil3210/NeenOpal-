import "./App.css";
import Card from "./Card";
import userdata from "./data";

function App() {
 
  const data = userdata;
  console.log(data,"hello")

  return (
    <div className="App">
    <Card/>
    </div>
  );
}

export default App;
