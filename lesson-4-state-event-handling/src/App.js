import { useState } from 'react'
import './App.css';
import Player from './components/Player';

const VALID_NUMBER_PLAYER = 5;
const initialState = [{
  name: "Cristian Ronaldo",
  position: "ST",
  age: 38,
  rate: 10,
},
{
  name: "Van Persi",
  position: "ST",
  age: 41,
  rate: 9,
},
{
  name: "B. Leno",
  position: "GK",
  age: 20,
  rate: 8,
},
{
  name: "T. Henry",
  position: "ST",
  rate: 100
}]
function App() {
  const [players, setPlayers] = useState(initialState)


  const playList = players.map((player, index) => <Player key={index} player={player} />);
  const onAddPlayerHandler = () => {
    const newPlayer = {
      name: "Harry Macguire",
      position: "Captain -  Rap xiec",
      age: 30,
      rate: 1,
    }
    const newState = [...players, newPlayer]
    setPlayers(newState)
  }

  const onFilterPlayer = () => {
    const filtedState = players.filter(player => player.rate >= VALID_NUMBER_PLAYER)
    setPlayers(filtedState)
  }

  return (
    <div className="App">
      <h1>Arsenal is the best team of Primier League</h1>
      <button onClick={onAddPlayerHandler} className="btn">Add new player</button>
      <button onClick={onFilterPlayer} className="btn" style={{
        marginTop: "16px"
      }}>Filter player</button>
      <div className="players__container">
        {playList}
      </div>
    </div>
  );
}

export default App;
//Component Tree
// Desctructering: object, array
// Method array: map, filter, reduce, some, every