import React, { useEffect, useState } from "react";

// class Stopwatch extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       isPaused: true,
//       elapsedSeconds: 0
//     }
//     this.handleRunning = this.handleRunning.bind(this)
//     this.handleReset = this.handleReset.bind(this)
//   }

  // render() {
  //   const iconClass = this.handleIcon();
  //   return (
  //     <div className='container'>
  //       <div className='stopwatch' onClick={this.handleReset}>
  //         <span>{this.state.elapsedSeconds}</span>
  //       </div>
  //       <div className='icon'>
  //         <i className={`${iconClass}`} onClick={this.handleRunning}></i>
  //       </div>
  //     </div>
  //   )
  // }

  // handleRunning() {
  //   this.setState({
  //     isPaused: !this.state.isPaused
  //   })

  //   const { isPaused } = this.state

  //   if (isPaused === true) {
  //     this.timer = setInterval(() => {
  //       this.setState({
  //         elapsedSeconds: this.state.elapsedSeconds + 1
  //       })
  //     }, 1000)
  //   } else {
  //     clearInterval(this.timer)
  //   }
  // }

  // handleIcon() {
  //   const { isPaused } = this.state

  //   if(isPaused === false) {
  //     return 'fas fa-pause'
  //   } else {
  //     return 'fas fa-play'
  //   }
  // }

//   handleReset() {
//     const { isPaused } = this.state

//     if (isPaused === true) {
//       this.setState({
//         elapsedSeconds: 0
//       })
//     }
//   }
// }

function StopWatch() {
  const [isPaused, setPause] = useState(true)
  const [count, setCount] = useState(0)
  const [interval, setTimer] = useState()

  function handleReset() {
    if (isPaused === true) {
      setCount(0);
    }
  }

  function handleIcon() {
    if (isPaused === false) {
      return 'fas fa-pause'
    } else {
      return 'fas fa-play'
    }
  }

  function handleRunning() {
    setPause(prevState => !prevState)

    if (isPaused === true) {
      setTimer(setInterval(() => {
        setCount(prevCount => prevCount + 1)
      }, 1000))
    } else {
      clearInterval(interval)
    }
  }

  return (
    <div className='container'>
      <div className='stopwatch' onClick={handleReset}>
        <span>{count}</span>
      </div>
      <div className='icon'>
        <i className={handleIcon()} onClick={handleRunning}></i>
      </div>
    </div>
  )
}

export default StopWatch
