// Import Styles 
import "./Rules.css"

// Import Hooks 
import { useState } from "react"

// Component 
export const Rules = ({siteState, setSitestate}) => { 
    
    const handleAdvanceButton = () => { 
        setSitestate('play')
    }
    return ( 
        <div className="Rules" style={{ display: siteState === 'rules' ? 'flex' : 'none' }}>
            <h2> How to play </h2>
            <>
                <ul>
                    <li><p>You will be shown 20 random pokémon. </p></li>
                    <li><p>Your job is to select all 20 pokémon without chosing the same pokémon twice. </p></li>
                    <li><p>After each selection, the order of the pokémon will be shuffled, so try to remember what you've already chosen!</p></li>
                </ul>
            </>
            <button className="StartButton" onClick={handleAdvanceButton}>A</button>
        </div>

    )
}