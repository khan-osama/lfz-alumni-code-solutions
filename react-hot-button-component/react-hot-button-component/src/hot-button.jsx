import React, { useState } from 'react'

// class HotButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { timesClicked: 0 }
//     this.handleClick = this.handleClick.bind(this)
//   }

//   cssClassName() {
//     const { timesClicked } = this.state;
//     if (timesClicked < 3) return null
//     if (timesClicked < 6) return 'coldest'
//     if (timesClicked < 9) return 'cold'
//     if (timesClicked < 12) return 'warm'
//     if (timesClicked < 15) return 'warmer'
//     if (timesClicked < 18) return 'hot'

//     return 'blazing'
//   }

//   render() {
//     const cssClass = this.cssClassName();
//     return (
//       <div className='container'>
//         <button className={`${cssClass}`} onClick={this.handleClick}>Hot Button</button>
//       </div>
//     )}

//   handleClick() {
//     this.setState({
//       timesClicked: this.state.timesClicked + 1
//     })
//   }
// }

// export default HotButton

function HotButton() {
  const [count, setCount] = useState(0)

  function incrementCount() {
    setCount(count + 1)
  }

  function cssClassName() {
    if (count < 3) return null
    if (count < 6) return 'coldest'
    if (count < 9) return 'cold'
    if (count < 12) return 'warm'
    if (count < 15) return 'warmer'
    if (count < 18) return 'hot'

    return 'blazing'
  }

  return (
    <div className='container'>
      <button className={cssClassName()} onClick={incrementCount}>Hot Button</button>
   </div>
  )
}

export default HotButton
