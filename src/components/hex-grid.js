import React from 'react'
import { connect } from 'react-redux'

class HexGrid extends React.Component {

  render() {
    const grid = this.props.grid
    console.log(grid)
    return (
      <p>
        Data for grid: {grid.toString()}
      </p>
    )
  }

}

const actions = {
//   increment: function() {
//     return { type: 'INCREMENT' }
//   }
// , decrement: function() {
//     return { type: 'DECREMENT' }
//   }
}

const mapStateToProps = function mapStateToProps(state) {
  return { grid: state.grid }
}

export default connect(mapStateToProps, actions)(HexGrid)
