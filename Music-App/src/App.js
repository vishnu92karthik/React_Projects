import axios from 'axios';
import React from 'react';
import './App.css';
import Card from './Components/Card';
import Spinner from './Components/Spinner';
import { useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const App = () =>{
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get('https://telugu-skillhub-own-music-api-default-rtdb.firebaseio.com/music-api/-MdCU2vPsoSsulYD2akz.json').then(
      res =>{
        !search ? setData(res.data) : setData(res.data.filter(songs => songs.singer===search))
      }
    )
  
  }, [search])
  const onSubmit = e =>{
    e.preventDefault();
    setSearch(search);
  }
  return(
    <div>
      <nav className= "navbar navbar-light bg-light">
        <div className= "container-fluid">
          <h3 className= "navbar-brand">My_Music <span style={{color:"blue"}}>𝄞</span></h3>
          <form className= "d-flex" onSubmit={onSubmit}>
            <input className="form-control me-2" type="text" onChange= {(e) => setSearch(e.target.value)} placeholder="Search Singer" aria-label="search" />
            <input className= "btn btn-outline-success" type="submit" value="search" />
          </form>
        </div>
      </nav>
      {data.length >= 1 ?
      <center>
        <Card songs={data} />
      </center>
      :
      <Spinner />
    }
    </div>
  )
}

export default App;
