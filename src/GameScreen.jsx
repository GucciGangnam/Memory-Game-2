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
    const [highScore, setHighScore] = useState([0])

    console.log(highScore)
    console.log(localStorage.highScore)

   

    //winner screen 
    const displayWinnerScreen = () => { 
        const gameBoard = document.querySelector('.GameBoard')
            gameBoard.style.display = 'none';
            const scoreDiv = document.querySelector('.ScoreDiv')
            scoreDiv.style.display = "none"
            const winnerScreen = document.querySelector('.WinnerScreen')
            winnerScreen.style.display = "flex";
            const catchEmText = document.querySelector('.HomeButton')
            catchEmText.innerHTML = "Catch'EmAgain"
    }

    // check for win 
    useEffect(() => { 
        if (highScore >= 20){ 
        displayWinnerScreen();
        }
    }, [highScore])

    useEffect(() => { 
    if (localStorage.highScore > highScore){ 
        setHighScore(localStorage.highScore)
    }
},[highScore])



    function shuffleCards() {
        const shuffledArray = finalPokemon;
        return shuffledArray.sort(() => Math.random() - 0.5);
    }

    const handleHomeBTN = () => { 
    setTimeout(()=>{
            window.location.reload();
        
    }, 50)

    };

    const handleCardClick = (pokemon) => {
        if (currentRun.includes(pokemon)) {
            const gameBoard = document.querySelector('.GameBoard')
            gameBoard.style.display = 'none';
            const lostScreen = document.querySelector('.LostScreen');
            lostScreen.style.display = "flex";
            const scoreDiv = document.querySelector('.ScoreDiv')
            scoreDiv.style.display = "none"
            const catchEmText = document.querySelector('.HomeButton')
            catchEmText.innerHTML = "Catch'EmAgain"
            setCurrentScore(0);
            setCurrentRun([]);
            localStorage.highScore = highScore
        } else {
            const allCards = document.querySelectorAll('.Card');
            allCards.forEach(card => {
                card.style.transform = 'rotateY(90deg)';
            });
            setTimeout(()=> {
                const allCards = document.querySelectorAll('.Card');
            allCards.forEach(card => {
                card.style.transform = 'rotateY(0deg)';
            });
            }, 400);
            setTimeout(()=> {
                // Your code goes here
                setFinalPokemon(shuffleCards());
                setCurrentScore(currentScore + 1)
                setCurrentRun([...currentRun, pokemon])
            }, 300);
        }
    }

    useEffect(() => {
        if (currentScore >= highScore) {
            setHighScore(currentScore);
        }
    }, [currentScore])

    return (
        <div className="GameScreen" style={{ display: siteState === 'play' ? 'flex' : 'none' }}>

            <div className="WinnerScreen">
            <h2> Incredible!</h2>
            <p>You caught all the pokémon!</p>
            <h2>BANISHED!</h2>
            </div>

            <div className="LostScreen"> 
            <h2> Unlucky! You caught the same pokémon twice </h2>
            <p>Your highest score so far is</p>
            <h2>{highScore}</h2>
            </div>

            <div className="GameScreenTop">
                <button className="HomeButton" onClick={handleHomeBTN}>
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
                        <div className="PokeMonName"> {pokemon.pokemonName} </div>
                    </div>
                ))}
            </div>

        </div>
    )
}