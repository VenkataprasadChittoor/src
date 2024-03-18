import React from 'react'

function UserDerails({person}) {
    let {name,skill,age}=person;
  return (
    <div>
      <li >{name}{skill}{age}</li>
    </div>
  )
}

export default UserDerails;
