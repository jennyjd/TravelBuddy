import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import travelBuddyApp from './reducers'
import Button from './components/commons/Button.jsx'

let store = createStore(travelBuddyApp)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Button />
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})
