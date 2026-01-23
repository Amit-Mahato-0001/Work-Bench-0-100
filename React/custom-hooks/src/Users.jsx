import useFetch from "./hooks/useFetch"

function Users(){
    const { data, loading, error} = useFetch(
        "https://jsonplaceholder.typicode.com/users"
    )

    if(loading){
        return <p>Loading!!!</p>
    }

    if(error){
        return <p>Error!!!</p>
    }

    return(
        <ul>
            {data.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    )
}

export default Users