import './App.css';
import Player from './components/Player/Player';
import playerData from './playerData';
import { useEffect, useState } from 'react';
import Select from './components/Select/Select';


function App() {
  const [select, setSelect] = useState([]);
  const [player, setPlayer] = useState([]);
  
  const handleAddPlayer = (player) =>{
    const newSelect = [...select, player];
    setSelect(newSelect);
  }
 
  useEffect(() =>{
    setPlayer(playerData)
  }, [])

  return (
    <div className="main-container">
      <div className="header">
      
      <h3 style={{color: 'cyan'}}>Argentina National Football Team Players Selected</h3>
        <ul>
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </ul>
      </div>
      <div className="info">
        <div className="player-profile">
          <div>
            {
              player.map((player) => {
                return (
                  <Player key={player.id} player={player} handleAddPlayer={handleAddPlayer}></Player>
                )
              })
            }
          </div>
        </div>
        <div>
          <Select select={select}></Select>
        </div>
      </div>
    </div>
  );
}


export default App;
