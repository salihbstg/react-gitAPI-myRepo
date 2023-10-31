import axios from "axios";
import "./App.css";
import Card from "./Components/Card.jsx";
function App() {
  const getData=async ()=>{
    const response=await axios.get("https://api.github.com/users/salihbstg/repos");
    return response.data;  
  }
  getData();
    return (
    <div className="App">
      <Card data={getData()}/>
    </div>
  );
}

export default App;
