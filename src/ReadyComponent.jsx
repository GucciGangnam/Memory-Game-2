

// import Hooks
import { useState } from "react";

// Import Styles 
import "./ReadyComponent.css"

// Import Components
import { Rules } from "./Rules";
import { GameScreen } from "./GameScreen";

// Component
export const ReadyComponent = ({siteState, setSitestate, finalPokemon, setFinalPokemon }) => {
    return (
        <div className="ReadyComponent">
            <Rules siteState={siteState} setSitestate={setSitestate} />
            <GameScreen siteState={siteState} setSitestate={setSitestate} finalPokemon={finalPokemon} setFinalPokemon={setFinalPokemon}/>
        </div>
    )
}