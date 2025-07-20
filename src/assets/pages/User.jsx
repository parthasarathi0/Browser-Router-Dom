import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    let {UserName}=useParams()
  return (
    <div>User : {UserName}</div>
  )
}

export default User