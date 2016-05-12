import { createStore } from 'redux'

import reducer from '../reducers'
import generateGridData from '../data/grid-generator'

export default createStore(reducer, {tiles: generateGridData(8, 5), selection:  null})
