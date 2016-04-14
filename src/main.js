import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'

import store from './store'
import HexGrid from './components/hex-grid'

ReactDOM.render(
  <Provider store={store}>
    <HexGrid />
  </Provider>
, document.getElementById('content')
)
