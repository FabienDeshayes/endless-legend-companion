import { createStore } from 'redux'

import reducer from '../reducers'
import gridData from '../data/grid.json'
console.log(gridData)

export default createStore(reducer, {grid: gridData})
