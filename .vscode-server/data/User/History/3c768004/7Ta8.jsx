import { useState } from 'react'
import {puppyList} from './data'

function App() {
 const [puppies, setPuppies] = useState(puppyList); 
 const [featPupId, setFeatPupId] = useState(null);

 const handleClick = (id) => {
}

  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log(featuredPup);

//console.log("puppyList: ", puppyList);

  return (
    <div className= "App">
    {
    puppies.map((puppy) => {
      
       return <p 
            
               onClick={()=>{setFeatPupId(puppy.id)}}
                    key = {puppy.id}>{puppy.name}
    
      })}

      {featPupId && (
        <div className='feature-pup'>
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
