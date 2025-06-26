import { useContext } from "react"
import authContext from '../../context/auth/context'
import UserMenu from '../UserMenu/UserMenu'


export const AppBar = () => {
    const {user, isLoggedIn, onLogIn, onLogOut} = useContext(authContext)

    return (
        <header>
            {isLoggedIn ? <UserMenu onLogOut={onLogOut} user={user} /> : <button onClick={onLogIn} type="button">Log In</button>}
        </header>
    )
}