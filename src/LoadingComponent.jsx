// Import styles 
import "./LoadingComponent.css"

// Component

export const LoadingComponent = () => { 
    return ( 
        <div className="LoadingComponent">
            <div className="LoadingScreenContent">
                <div className="LoadingText">
                    Loadin'emAll
                </div>
                <img className="PokeBallIMG" src="src/assets/Images/f8335abfc56c2a665ca700c0c24a68a5.png" alt="PokeBall" />
            </div>
        </div>
    )
}