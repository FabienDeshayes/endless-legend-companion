import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'

import store from './store'
import HexGrid from './components/hex-grid'
import FidsiSums from './components/fidsi-sums'

ReactDOM.render(
  <Provider store={store}>
    <div>
      <HexGrid />
      <FidsiSums />
    </div>
  </Provider>
, document.getElementById('content')
)
