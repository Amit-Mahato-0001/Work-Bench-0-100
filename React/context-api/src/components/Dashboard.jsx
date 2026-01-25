// import {useContext} from "react"
// import userContext from "../context/userContext"

// function Dashboard() {

//     const user = useContext(userContext)

//     return(
//         <div>
//             <h2>{user.name}</h2>
//             <h2>{user.role}</h2>
//         </div>
//     )
// }

// export default Dashboard

{/* context + state (task) */}
import {useContext} from "react" 
import userContext from "../context/userContext"

function Dashboard () {

    const {user, setUser} = useContext(userContext)

    return(
        <div>
            {user ? (
                <>
                <h2>{user.name}</h2>
                <h2>{user.role}</h2>
                <button onClick={() => setUser(null)}>logout</button>
                </>
            ) : (
                <button onClick={() => setUser({ name: "Amit", role: "admin"})}>
                    login
                </button>
            )}
        </div>
    )
}

export default Dashboard