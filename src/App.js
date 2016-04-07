import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {

  render() {
    const { value, increment, decrement } = this.props
    return (
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={increment}>
          +
        </button>
        {' '}
        <button onClick={decrement}>
          -
        </button>
      </p>
    )
  }
}

const actions = {
  increment: function() {
    return { type: 'INCREMENT' }
  }
, decrement: function() {
    return { type: 'DECREMENT' }
  }
}

const mapStateToProps = function mapStateToProps(state) {
  return { value: state }
}

export default connect(mapStateToProps, actions)(Counter)
