// Import styles
import './App.css';

// Import Components 
import { LoadingComponent } from './LoadingComponent';
import { ReadyComponent } from './ReadyComponent';

// Import Hooks
import React, { useState, useEffect } from 'react';

// Component
function App() {
  const [randomNumbers, setRandomNumbers] = useState([]);
  const [finalPokemon, setFinalPokemon] = useState([]);
  const [siteState, setSitestate] = useState('loading');


  useEffect(() => {
    if (finalPokemon.length === 20) { // Check if finalPokemon has reached a length of 20
      setTimeout(() => {
        setSitestate('rules'); // Update the siteState after a delay
      }, 1000); // Adjust the delay time as needed
    }
  }, [finalPokemon]);

  useEffect(() => {
    const randomNums = Array.from({ length: 20 }, () => Math.floor(Math.random() * 1000) + 1);
    setRandomNumbers(randomNums);
  }, []);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const pokemonDataArray = [];

      // Use Promise.all to wait for all fetch requests to complete
      await Promise.all(randomNumbers.map(async (num) => {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();
          const imageURL = data.sprites.front_default;
          const pokemonName = data.species.name;
          pokemonDataArray.push({ imageURL, pokemonName });
        } catch (error) {
          console.error('Fetch error:', error);
        }
      }));

      // Update the state after all fetch requests have completed
      setFinalPokemon(pokemonDataArray);
    };

    fetchPokemonData();
  }, [randomNumbers]);





  return (
    <div className='App'>
      <div className="BackGround" style={{ filter: siteState === 'loading' ? 'none' : 'blur(10px)' }}/>
      {siteState === 'loading' ? (
        <LoadingComponent />
      ) : (
        <ReadyComponent siteState={siteState} setSitestate={setSitestate} finalPokemon={finalPokemon} setFinalPokemon={setFinalPokemon} />
      )}
    </div>
  );
}

export default App;