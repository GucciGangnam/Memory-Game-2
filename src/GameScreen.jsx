// reference 
// {finalPokemon.map((pokemon, index) => (
//     <div className="Card" key={index}>
//     <img className="CardIMG" src={pokemon.imageURL} alt={`Pokemon ${index}`} />
//     </div>
// ))}


// Import Styles
import "./GameScreen.css"

// Import Hooks
import { useState, useEffect } from "react"

// Component 
export const GameScreen = ({ siteState, setSiteState, finalPokemon, setFinalPokemon }) => {

    const [currentRun, setCurrentRun] = useState([])
    const [currentScore, setCurrentScore] = useState(0)
    const [highScore, setHighScore] = useState(0)


    function shuffleCards() {
        const shuffledArray = finalPokemon;
        return shuffledArray.sort(() => Math.random() - 0.5);
    }





    const handleCardClick = (pokemon) => {
        if (currentRun.includes(pokemon)) {
            alert('GAMEOVERBTCH!!!');
            setCurrentScore(0);
            setCurrentRun([]);
        } else {
            setFinalPokemon(shuffleCards());
            console.log(finalPokemon)
            setCurrentScore(currentScore + 1)
            setCurrentRun([...currentRun, pokemon])
        }
    }

    useEffect(() => {
        if (currentScore >= highScore) {
            setHighScore(currentScore);
        }
    }, [currentScore])

    return (
        <div className="GameScreen" style={{ display: siteState === 'play' ? 'flex' : 'none' }}>

            <div className="GameScreenTop">
                <button className="HomeButton">
                    Catch'EmAll
                </button>
                <div className="ScoreDiv">
                    Current Score: {currentScore}
                    <p></p>
                    High Score: {highScore}
                </div>
            </div>

            <div className="GameBoard">
                {finalPokemon.map((pokemon, index) => (
                    <div className="Card" key={index} onClick={() => { handleCardClick(pokemon) }}>
                        <img className="CardIMG" src={pokemon.imageURL} alt={`Pokemon ${index}`} />
                    </div>
                ))}
            </div>

        </div>
    )
}