import './App.css';
import List from'./components/list';
function App() {
  return (
    <div className="App">
    <List heading={"product 1"} name="soap" src="https://i.imgur.com/HYQbmZt.png"/>
    <List heading={"product 2"} name="ditergent" src="https://i.imgur.com/HYQbmZt.png"/>

    <List heading={"product 3"} name="shampoo" src="https://i.imgur.com/HYQbmZt.png"/>

    <List heading={"product 4"} name="sanitizers" src="https://i.imgur.com/HYQbmZt.png"/>
    </div>
  );
}

export default App;
