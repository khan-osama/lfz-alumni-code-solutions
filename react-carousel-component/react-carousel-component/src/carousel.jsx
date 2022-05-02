import React from 'react'

const carouselImages = [
  {
    imageURL: 'https://spng.pngfind.com/pngs/s/580-5806796_tf2-soldier-tf2soldier-tf2comics-soldier-tf2-hd-png.png'
  },

  {
    imageURL: 'https://spng.pngfind.com/pngs/s/288-2888435_team-fortress-2-beta-mod-cross-hd-png.png'
  },

  {
    imageURL: 'https://spng.pngfind.com/pngs/s/677-6771515_sniper-and-spy-tf2-hd-png-download.png'
  },

  {
    imageURL: 'https://cdn.quotesgram.com/img/44/58/773406058-2327037-heavy.jpg'
  },

  {
    imageURL: 'https://content.instructables.com/ORIG/FWA/ZIM7/I36LFL13/FWAZIM7I36LFL13.jpg?auto=webp&frame=1&width=320&md=c1aa5c4d5f71b7ca89845606d8e6706f'
  }
];

const dotsArray = [null, null, null, null, null];
const length = carouselImages.length;

class ImageSlides extends React.Component {
  render() {
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
    const { current } = this.state;
    this.setState({
      current: current === length - 1 ? 0 : current + 1
    });
  }

  prevSlide() {
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
        <ImageSlides current={this.state.current} nextSlide={this.nextSlide} prevSlide={this.prevSlide} />
        <CarouselDots current={this.state.current} moveDotIndex={this.moveDotIndex} />
      </div>
    );
  }
}

export default AppCarousel;
