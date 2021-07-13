import React from 'react'
import './charactersDisplay.css'

function CharactersDisplay (props) {
  const { characterList } = props

  const characters = characterList.map(character => {
    return (
      character
    )
  })

  return (
    <div className='characterDisplay'>
      {characters}
    </div>
  )
}

export default CharactersDisplay
