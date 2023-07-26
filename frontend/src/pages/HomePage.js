import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../context/AuthContext'
const HomePage = () => {
  let [Persons, setPersons] = useState([])
  let {authTokens, logoutUser} = useContext(AuthContext)

  useEffect(() => {
    getPersons()
    console.log('Persons',Persons)
  }, [])

  let getPersons = async () => {
    let response = await fetch('http://localhost:8100/api/persons', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access)
      }
    })
    let data = await response.json()
    if (response.status === 200) {
      setPersons(data)
    } else if (response.statusText === 'Unauthorized') {
      alert("Something went wrong")
      logoutUser()
    }

  }

  return (
    <div>
      <p>You are logged in the home page</p>
    </div>
    
  )
}

export default HomePage
