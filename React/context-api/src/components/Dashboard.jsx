import {useContext} from "react"
import userContext from "../context/userContext"

function Dashboard() {

    const user = useContext(userContext)

    return(
        <div>
            <h2>{user.name}</h2>
            <h2>{user.role}</h2>
        </div>
    )
}

export default Dashboard