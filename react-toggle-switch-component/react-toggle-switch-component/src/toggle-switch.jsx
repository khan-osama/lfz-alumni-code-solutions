import React, { useState } from 'react'

// class ToggleSwitch extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isToggled: false }
//     this.handleClick = this.handleClick.bind(this)
//   }

//   render() {
//     return (
//       <div className='container'>
//         <label className='switch'>
//           <input onClick={this.handleClick} type="checkbox"></input>
//           <span className='slider'></span>
//         </label>
//       </div>
//     )
//   }

//   handleClick() {
//     this.setState({
//       isToggled: !this.state.isToggled
//     })
//   }
// }

// export default ToggleSwitch


function ToggleSwitch() {
  const [isToggled, setToggle] = useState(false)

  function handleClick() {
    setToggle(prevState => !prevState)
  }

  return (
    <div className='container'>
      <label className='switch'>
        <input onClick={handleClick} type="checkbox"></input>
        <span className='slider'></span>
      </label>
  </div>
  )
}

export default ToggleSwitch
