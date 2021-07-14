export const LOAD_CHARACTER = 'LOAD_CHARACTER'
export const CHARACTER_SUCCESS = 'CHARACTER_SUCCESS'
export const CHARACTER_ERROR = 'CHARACTER_ERROR'

export const characterSuccess = (data) => {
  return {
    type: CHARACTER_SUCCESS,
    payload: { data }
  }
}

export const characterError = (error) => {
  return {
    type: CHARACTER_ERROR,
    payload: { error }
  }
}

export const loadCharacter = (number) => {
  return async (dispatch) => {
    const url = `https://swapi.dev/api/people/${number}/`

    try {
      const res = await fetch(url)
      const json = await res.json()

      const resTwo = await fetch(json.homeworld)
      const jsonTwo = await resTwo.json()

      // Get an array of Promises, these are the responses
      const filmsRes = await Promise.all(json.films.map(film => fetch(film)))
      // Resolve the responses to JSON
      const filmsJSON = await Promise.all(filmsRes.map(res => res.json()))

      const jsonArr = [json, jsonTwo, filmsJSON]

      dispatch(characterSuccess(jsonArr))
    } catch (error) {
      dispatch(characterError(error))
    }
  }
}
