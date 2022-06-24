import React from 'react'

const dotsArray = [null, null, null, null, null];

class ImageSlides extends React.Component {
  render() {
    const { carouselImages } = this.props;
    return (
      <div className="slides-container">
        <i className="fas fa-chevron-left" onClick={this.props.prevSlide}></i>
        <div className="images-container">
          <ul>
            {carouselImages.map((obj, index) => {
              return (
                <li key={obj.imageURL} className='image-div'>
                  {index === this.props.current && (<img src={obj.imageURL}></img>)}
                </li>
              );
            })}
          </ul>
        </div>
        <i className="fas fa-chevron-right" onClick={this.props.nextSlide}></i>
      </div>
    );
  }
}

class CarouselDots extends React.Component {
  render() {
    return(
      <div className="dots-container">
      {dotsArray.map((obj, index) => {
        return (
          <div key={index} className={this.props.current === index ? 'dot active' : 'dot'} onClick={() => this.props.moveDotIndex(index)}>
          </div>
        );
      })}
      </div>
    )
  }
}

class AppCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.moveDotIndex = this.moveDotIndex.bind(this);
  }

  nextSlide() {
    const { carouselImages } = this.props;
    const length = carouselImages.length;
    const { current } = this.state;
    this.setState({
      current: current === length - 1 ? 0 : current + 1
    });
  }

  prevSlide() {
    const { carouselImages } = this.props;
    const length = carouselImages.length;
    const { current } = this.state;
    this.setState({
      current: current === 0 ? length - 1 : current - 1
    });
  }

  moveDotIndex(index) {
    this.setState({
      current: index
    });
  }

  moveForward() {
    const { carouselImages } = this.props;
    const length = carouselImages.length;
    const { current } = this.state;
    this.setState({
      current: current === length - 1 ? 0 : current + 1
    });
  }

  componentDidMount() {
    this.timer = setInterval(() => this.moveForward(), 3000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="carousel-container">
        <ImageSlides current={this.state.current} nextSlide={this.nextSlide} prevSlide={this.prevSlide} carouselImages={this.props.carouselImages} />
        <CarouselDots current={this.state.current} moveDotIndex={this.moveDotIndex} />
      </div>
    );
  }
}

export default AppCarousel;
