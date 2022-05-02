import React from 'react'

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      password: '',
      passLength: 0
    }
    this.handleChange = this.handleChange.bind(this)
  }

  render() {

    const { passLength } = this.state
    let validIcon;
    if (passLength < 8) {
      validIcon = <i className='fa-solid fa-xmark'></i>
    }  else {
      validIcon = <i className='fa-solid fa-check'></i>
    }

    return (
      <div className='container'>
        <form>
          <label>
            Password
          </label>
          <div className='input'>
            <input type='password' onChange={this.handleChange}></input>
            {validIcon}
          </div>
          {passLength === 0 &&
            <p id='empty'>
              A password is required.
            </p>
          }
          {passLength < 8 && passLength > 0 &&
            <p id='short'>
            Your password is too short
            </p>
          }
        </form>
      </div>
    )
  }

  handleChange() {
    this.setState({
      password: event.target.value,
      passLength: event.target.value.length
    })
  }
}

export default ValidatedInput
