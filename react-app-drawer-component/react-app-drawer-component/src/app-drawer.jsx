import React from 'react'

class DrawerIcon extends React.Component {

  render() {
    return (
      <div className={`${this.props.isOpen ? "hidden" : 'toolbar'}`}>
        <div className="icon">
            <i className="fas fa-bars" onClick={this.props.handleClick}></i>
        </div>
      </div>
    )
  }
}

class Overlay extends React.Component {
  render() {
    return (
      <div className={`${this.props.isOpen ? "overlay" : 'hidden'}`} onClick={this.props.handleClick}></div>
    )
  }
}

class DrawerMenuHeader extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>
          Menu
        </h1>
      </div>
    )
  }
}

class DrawerOptionsRow extends React.Component {
  render() {
    return (
      <div className="row-links">
        <p onClick={this.props.handleClick}>About</p>
        <p onClick={this.props.handleClick}>Get Started</p>
        <p onClick={this.props.handleClick}>Sign In</p>
      </div>
    )
  }
}

class DrawerList extends React.Component {

  render() {
    return (
      <div className={`${this.props.isOpen ? "drawer-container" : 'hidden'}`}>
        <DrawerMenuHeader />
        <DrawerOptionsRow isOpen={this.props.isOpen} handleClick={this.props.handleClick} />
      </div>
    )
  }
}

class AppDrawer extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div className="AppContainer">
        <DrawerIcon isOpen={this.state.isOpen} handleClick={this.handleClick} />
        <DrawerList isOpen={this.state.isOpen} handleClick={this.handleClick} />
        <Overlay isOpen={this.state.isOpen} handleClick={this.handleClick}/>
      </div>
    )
  }
}

export default AppDrawer
