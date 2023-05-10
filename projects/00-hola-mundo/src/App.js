import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <>
            <TwitterFollowCard 
                userName="midudev" 
                name="Soy midevu" 
                isFollowing={true}>
                    midudev
            </TwitterFollowCard>

            <TwitterFollowCard 
                userName="dog" 
                name="Guau Guau" 
                isFollowing={false}>
                    dog
            </TwitterFollowCard>
            
            <TwitterFollowCard 
                userName="deviantart/cat" 
                name="Miau michi" 
                isFollowing>
                    deviantart/cat
            </TwitterFollowCard>

            <TwitterFollowCard userName="shakira" >
                    Waka waka
            </TwitterFollowCard>
        </>
    )
}