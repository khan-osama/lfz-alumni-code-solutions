import React from "react";

class Stopwatch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isPaused: true,
      elapsedSeconds: 0
    }
    this.handleRunning = this.handleRunning.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  render() {
    const iconClass = this.handleIcon();
    return (
      <div className='container'>
        <div className='stopwatch' onClick={this.handleReset}>
          <span>{this.state.elapsedSeconds}</span>
        </div>
        <div className='icon'>
          <i className={`${iconClass}`} onClick={this.handleRunning}></i>
        </div>
      </div>
    )
  }

  handleRunning() {
    this.setState({
      isPaused: !this.state.isPaused
    })

    const { isPaused } = this.state

    if (isPaused === true) {
      this.timer = setInterval(() => {
        this.setState({
          elapsedSeconds: this.state.elapsedSeconds + 1
        })
      }, 1000)
    } else {
      clearInterval(this.timer)
    }
  }

  handleIcon() {
    const { isPaused } = this.state

    if(isPaused === false) {
      return 'fas fa-pause'
    } else {
      return 'fas fa-play'
    }
  }

  handleReset() {
    const { isPaused } = this.state

    if (isPaused === true) {
      this.setState({
        elapsedSeconds: 0
      })
    }
  }
}

export default Stopwatch
