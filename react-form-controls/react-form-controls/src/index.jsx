import React from 'react'
import ReactDOM from 'react-dom'

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email
            <input type='email' value={this.state.email} onChange={this.handleChange}></input>
          </label>
          <input type='submit' value='Submit'></input>
        </form>
      </div>
    )
  }

  handleChange() {
    this.setState({
      email: event.target.value
    })
  }

  handleSubmit() {
    console.log('state: ', this.state)
    event.preventDefault();
  }
}

const element =  <NewsletterForm />

ReactDOM.render(
  element,
  document.getElementById('root')
)
