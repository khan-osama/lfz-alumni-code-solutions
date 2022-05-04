import React from 'react'
class Accordion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      topicSelected: null,
      accordionOpen: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    const { data } = this.props
    return (
      <div className='container'>
          <div className='data'>
            {data.map((object, index) => (
              <div className='header' onClick={() => {this.handleClick(index)}}>
                <h1>
                  {object.title}
                </h1>
                <div className={`${(this.state.topicSelected === index) &&
                this.state.accordionOpen ? 'content-show' : 'hidden'}`}>
                  <p>{object.content}</p>
                </div>
              </div>
            ))}
          </div>
      </div>
    )
  }

  handleClick(i) {

    this.setState({
      topicSelected: i,
      accordionOpen: !this.state.accordionOpen
    })
  }
}

export default Accordion
