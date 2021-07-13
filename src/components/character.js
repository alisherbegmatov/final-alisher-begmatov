import React from 'react'

function Character (props) {
  const { name, birthYear, gender, height, mass, skinColor, hairColor, eyeColor } = props

  return (
    <div className='character'>
      <h2>Name: {name}</h2>
      <p>Birth Year: {birthYear}</p>
      <p>Gender: {gender}</p>
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
      <p>Skin Color: {skinColor}</p>
      <p>Hair Color: {hairColor}</p>
      <p>Eye Color: {eyeColor}</p>
    </div>
  )
}

export default Character
