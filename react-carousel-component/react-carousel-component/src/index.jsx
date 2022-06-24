import React from 'react'
import ReactDOM from 'react-dom'
import AppCarousel from './carousel'

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

const element = <AppCarousel carouselImages={carouselImages} />

ReactDOM.render(
  element,
  document.getElementById('root')
)
