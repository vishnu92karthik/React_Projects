
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import SearchBox from './components/SearchBox';
import PicDisplay from './PicDisplay';
//import Carousels from './Carousels';
// import Carousels1 from './Carousels1';

function App() {
  return (
    <div className="container">
      <div className = "searchblock">
     <h2>Search Photos</h2>
    <SearchBox />
    <div className="container">
    <PicDisplay />
    </div>
    </div>
    </div>
  );
}

export default App;
