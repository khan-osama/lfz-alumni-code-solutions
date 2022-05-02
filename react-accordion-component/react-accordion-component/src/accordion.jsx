import React from 'react'

const data = [
  {
    title: `Hypertext Markup Language`,
    content: `Hypertext Markup Language (HTML) is the standard markup language
    for creating web pages and web applications. With Cascading Style Sheets (CSS)
     and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.`
  },
  {
    title: `Cascading Style Sheets`,
    content: `Cascading Style Sheets (CSS) is a style sheet language used for describing
    the presentation of a document written in a markup language like HTML. CSS is a cornerstone
    technology of the worldwide web alongside HTML and JavaScript.`
  },
  {
    title: `JavaScript`,
    content: `JavaScript, often abbreviated as JS, is a high-level, interpreted programming
    language that conforms to the ECMAscript specification. JavaScript has curly-bracket syntax,
    dynamic typing, prototype-based object-orientation, and first-class functions.`
  }
]

class AccordionData extends React.Component {
  <div className='data'>
  {data.map((object, index) => (
    <div className='header' onClick={() => {this.props.handleClick(index)}}>
      <h1>
        {object.title}
      </h1>
      <div className={`${(this.props.topicSelected === index) &&
      this.props.accordionOpen ? 'content-show' : 'hidden'}`}>
        <p>{object.content}</p>
      </div>
    </div>
  ))}
</div>
}

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
    return (
      <div className='container'>
        <AccordionData topicSelected={this.state.topicSelected} accordionOpen={this.state.accordionOpen} handleClick={this.handleClick} />
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
