import React from 'react'
import './App.css'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import Home from './components/home'

const store = createStore(rootReducer, applyMiddleware(thunk))

function App () {
  return (
    <Provider store={store}>
      <div className='App'>
        <Home />
      </div>
    </Provider>
  )
}

export default App
