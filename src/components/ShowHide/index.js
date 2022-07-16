import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    isFirstNameVisible: false,
    isLastNameVisible: false,
  }

  showHideFirstName = () => {
    this.setState(prevState => ({
      isFirstNameVisible: !prevState.isFirstNameVisible,
    }))
  }

  showHideLastName = () => {
    this.setState(prevState => ({
      isLastNameVisible: !prevState.isLastNameVisible,
    }))
  }

  render() {
    const {isFirstNameVisible, isLastNameVisible} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-cards-container">
          <div className="show-hide-card">
            <button
              className="show-hide-button"
              type="button"
              onClick={this.showHideFirstName}
            >
              Show/Hide FirstName
            </button>
            {isFirstNameVisible && <p className="name">Joe</p>}
          </div>
          <div className="show-hide-card">
            <button
              className="show-hide-button"
              type="button"
              onClick={this.showHideLastName}
            >
              Show/Hide LastName
            </button>
            {isLastNameVisible && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
