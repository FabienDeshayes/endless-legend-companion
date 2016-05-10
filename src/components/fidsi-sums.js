import React from 'react'
import { connect } from 'react-redux'

class FidsiSums extends React.Component {

  render() {
    const { selection } = this.props

    return (
      <div>
        <span>Food: { selection ? selection.fidsi.food : 0 }</span>
        <span> - Industry: { selection ? selection.fidsi.industry : 0 }</span>
        <span> - Dust: { selection ? selection.fidsi.dust : 0 }</span>
        <span> - Science: { selection ? selection.fidsi.science : 0 }</span>
        <span> - Influence: { selection ? selection.fidsi.influence : 0 }</span>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { selection: state.selection }
}

export default connect(mapStateToProps)(FidsiSums)
