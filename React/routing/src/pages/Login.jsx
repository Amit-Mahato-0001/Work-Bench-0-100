import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()

    const HandleLogin = () => {
        navigate("/profile")
    }

  return (
    <button onClick={HandleLogin}>login</button>
  )
}

export default Login