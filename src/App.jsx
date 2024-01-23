import { useState } from 'react'
import { puppyList } from './data.js'
import './index.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null);
  const [featuredPup2, setfP] = useState(null);
  //console.log(puppies)

  function handleClick() {
    // ???
  }

  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  //console.log(featuredPup)

  return (
      <div className="App">

      {puppies.map((puppy) => {
        return (
          <p onClick={()=>{ setFeatPupId(puppy.id)}} key={puppy.id}>
            <div>{puppy.name}</div>
          </p>
        );
      })}

        {featPupId && (
        <div className="Puppy">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}

      </div>
);
}

export default App