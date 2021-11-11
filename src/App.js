import React, { useState } from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';

function App() {

  const [monsters, setmonsters] = useState([])
  const [search, setsearch] = useState('')

  const filteredMonistors = monsters.filter(monistor => 
    monistor.name.toLowerCase().includes(search.toLowerCase()))
  
  const Change = (e) => setsearch(e.target.value)


  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then(users => setmonsters(users))

  
  return (
    <div className='App'>
      <h1> Monsters Rolodex </h1>
      <SearchBox placeholder='search monsters' handleChange={Change}/>
      <CardList marvels={filteredMonistors}/>
    </div>
  );
}

export default App;
