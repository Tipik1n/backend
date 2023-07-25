import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'


const LoginPage = () => {
  let { loginUser } = useContext(AuthContext)
  return (
    <div>
      <form onSubmit={loginUser }>
        <input type="text" placeholder="Enter username" name="username" />
        <input type="password" placeholder="Enter password" name="password" />
        <button type="submit"/>
      </form>
    </div>
  )
}

export default LoginPage
