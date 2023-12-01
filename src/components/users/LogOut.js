import { useEffect } from "react"
import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom";


const LogOut = ()=>{
    const navigate = useNavigate();
    const { logout } = useAuth();

    useEffect(()=>{
        logout();
        navigate("/home")
    },[])
    
    
     
}
export default LogOut;