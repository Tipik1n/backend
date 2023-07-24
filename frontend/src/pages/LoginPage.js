import React from 'react'

const LoginPage = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Enter username" name="username" />
        <input type="password" placeholder="Enter password" name="password" />
        <button type="submit"/>
      </form>
    </div>
  )
}

export default LoginPage
