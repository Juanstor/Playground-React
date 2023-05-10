import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <>
            <TwitterFollowCard 
                userName="midudev" 
                name="Soy midevu" 
                isFollowing={true}
            />
            <TwitterFollowCard 
                userName="dog" 
                name="Guau Guau" 
                isFollowing={false}
            />
            <TwitterFollowCard 
                userName="deviantart/cat" 
                name="Miau michi" 
                isFollowing
            />
            <TwitterFollowCard 
                userName="shakira" 
                name="waka waka" 
            />
        </>
    )
}