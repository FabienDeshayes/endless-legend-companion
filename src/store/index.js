import { createStore } from 'redux'

import reducer from '../reducers'
import gridData from '../data/grid.json'

export default createStore(reducer, {grid: gridData})
