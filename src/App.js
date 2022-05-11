import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Dishes from './components/Dishes/Dishes';

function App() {
  return (
    <div className="App">
     <Header/>
     <Menu/>
     <Dishes/>
    </div>
  );
}

export default App;
