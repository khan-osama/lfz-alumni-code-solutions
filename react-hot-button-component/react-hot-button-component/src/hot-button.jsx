import React from 'react'

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timesClicked: 0 }
    this.handleClick = this.handleClick.bind(this)
  }

  cssClassName() {
    const { timesClicked } = this.state;
    if (timesClicked < 3) return null
    if (timesClicked < 6) return 'coldest'
    if (timesClicked < 9) return 'cold'
    if (timesClicked < 12) return 'warm'
    if (timesClicked < 15) return 'warmer'
    if (timesClicked < 18) return 'hot'

    return 'blazing'
  }

  render() {
    const cssClass = this.cssClassName();
    return (
      <div className='container'>
        <button className={`${cssClass}`} onClick={this.handleClick}>Hot Button</button>
      </div>
    )}

  handleClick() {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }
}

export default HotButton
