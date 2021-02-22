import react from 'react';
import '../../styles.css'

//simple landing page with banner image and some text
export const Home = () =>{
    return(
        <header className= "hero-image">
        <div className="hero-text">
            <h1>THE HEROES OF MARVEL</h1>
            <h4>ALL IN YOUR OWN API</h4>
        </div>
    </header>
    )
}