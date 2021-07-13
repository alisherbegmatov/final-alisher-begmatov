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
      dispatch(characterSuccess(json))
    } catch (error) {
      dispatch(characterError(error))
    }
  }
}
