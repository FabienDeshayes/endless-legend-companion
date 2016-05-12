import React from 'react'
import { connect } from 'react-redux'

class FidsiSums extends React.Component {

  render() {
    const { selection, preselection } = this.props

    function renderFidsi(fidsi) {
      return (
        <div>
          <span>Food: { fidsi.food }</span>
          <span> - Industry: { fidsi.industry }</span>
          <span> - Dust: { fidsi.dust }</span>
          <span> - Science: { fidsi.science }</span>
          <span> - Influence: { fidsi.influence }</span>
        </div>
      )
    }

    return (
      <div>
        { preselection && preselection.fidsi ? renderFidsi(preselection.fidsi) : '' }
        { selection && selection.fidsi ? renderFidsi(selection.fidsi) : '' }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selection: state.selection
  , preselection: state.preselection
  }
}

export default connect(mapStateToProps)(FidsiSums)
