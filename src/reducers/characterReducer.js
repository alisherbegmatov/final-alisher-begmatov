import { CHARACTER_SUCCESS, CHARACTER_ERROR } from '../actions'

export const characterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case CHARACTER_SUCCESS:
      return payload.data

    case CHARACTER_ERROR:
      return payload.error

    default:
      return state
  }
}
