import { useState, useEffect} from 'react';
import './App.css';
import RandomUser from './RandomUser.jsx';

const API_URL = 'https://randomuser.me/api/?inc=gender,name,nat,dob,picture,phone'; //RandomUser API

const App = () => {

  const [randomUser, setRandomUser] = useState([]);

  const getUserData = async() => {
      const response = await fetch(`${API_URL}`);
      const userData = await response.json();
      setRandomUser(userData.results[0]);
  }

  useEffect(() => {
    getUserData();
  }, []);

    return (
      <div className='app'>
        <h1 className='appTitle'>RandomUser Card Generator</h1>
        <div className='userCard'>
          {
            randomUser != 0
            ? (
              <div className='container'>
                <RandomUser user={randomUser}/>
              </div>
            ) : (
              <div className='empty'>
                <p>No user data (data fetch failed?)</p>
              </div>
            )
          }
        </div>
        <button 
          className='getUser'
          onClick={() => getUserData()}
          >Randomize User</button>
      </div>
    );
};

export default App;