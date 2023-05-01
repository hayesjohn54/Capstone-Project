import React, { useState } from 'react';

function App() {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const min = 1;
    const max = 15;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    let activity = " ";
    if (random === 1) {
      activity = "Wintertodt"  
    } else if (random === 2){
      activity = "Tempoross"
    } else if (random === 3){
      activity = "Herbiboar"
    } else if (random === 4){
      activity = "Slayer"
    } else if (random === 5){
      activity = "Log Off"
    } else if (random === 6){
      activity = "Finish your damn QUEST CAPE"
    } else if (random === 7){
      activity = "Mahogany Homes"
    } else if (random === 8){
      activity = "Vorkath"
    } else if (random === 9){
      activity = "Zalcano"
    } else if (random === 10){
      activity = "Corrupted Gauntlet"
    } else if (random === 11){
      activity = "Agility 🤮"
    } else if (random === 12){
      activity = "Guardians of the Rift"
    } else if (random === 13){
      activity = "Level Magic"
    } else if (random === 14){
      activity = "Birdhouse Run"
    } else if (random === 15){
      activity = "Herb Run"
    }
    
    
    
    setRandomNumber(activity);
  ;}

  return (
    <div className="App">
      <h1>What Should I Do?</h1>
      <button onClick={generateRandomNumber}>Generate OSRS Task</button>
      {randomNumber && (
        <div>
          <h2>Your OSRS task is:</h2>
          <p>{randomNumber}</p>
        </div>
      )}
    </div>
  );
}

export default App;
