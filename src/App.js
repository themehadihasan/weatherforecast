import './App.css';
import Search from './Components/Search/Search';
import BackgroundImage from './background.png';

function App() {

  return (
    <div className="app container-fluid pt-5" style={{backgroundImage: `url(${BackgroundImage})`}}>
      <Search />
    </div>
  );
}

export default App;
