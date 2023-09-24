import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import Search from './components/Search';
import CategoryCards from './components/CategoryCards';
import NewAlbums from './components/NewAlbums';

function App() {
  return (
    <div className="App">
      <Search />
      <Home />
      <CategoryCards />
      <NewAlbums />
    </div>
  );
}

export default App;
