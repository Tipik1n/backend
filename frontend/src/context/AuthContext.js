import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

// import { useHistory } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({ children }) => {
    
    
    let [authTokens, setAuthTokens] = useState( () => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState( () => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    let [loading, setLoading] = useState(true)

    // const history = useHistory()
    const navigate = useNavigate()
    
    let loginUser = async (e) => {
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8100/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'username' : e.target.username.value,'password' : e.target.password.value})
        })
        let data = await response.json()

        console.log('data', data)
        console.log('response', response)
        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            navigate('/')
        }
        else {
            alert("Something went wrong")
        }
       } 

    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        navigate('/login')
    }

    let updateToken = async () => {
        console.log('updateToken')
        let response = await fetch('http://127.0.0.1:8100/api/token/refresh/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'refresh' : authTokens.refresh})
        }) 
        let data = await response.json()

        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        } else {
            alert("Something went wrong")
            logoutUser()
        }

        // if (loading) {
        //     setLoading(false)
        // }

    }

    useEffect(() => {

        let interval = setInterval(() => {
            if (authTokens){
                updateToken()
            }
        }, 2000)
        return () => clearInterval(interval)
                    
    }, [authTokens, loading])

    let contextData = {
        user: user,
        loginUser: loginUser,
        logoutUser: logoutUser
    }
     return(
        <AuthContext.Provider value={contextData} >
            {children}
        </AuthContext.Provider>
     )
}