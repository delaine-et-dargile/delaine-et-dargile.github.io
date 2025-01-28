import i18n from '../../i18n'

import black_bowl from '../assets/img/creations/black_bowl/black_bowl.jpg'
import black_bowl1 from '../assets/img/creations/black_bowl/black_bowl1.jpg'

import tomato from '../assets/img/creations/tomato/tomato.jpg'
import tomato1 from '../assets/img/creations/tomato/tomato1.jpg'
import tomato2 from '../assets/img/creations/tomato/tomato2.jpg'

import plant from '../assets/img/creations/plant/plant1.jpg'
import plant2 from '../assets/img/creations/plant/plant2.jpg'
import plant3 from '../assets/img/creations/plant/plant3.jpg'

import coaster1 from '../assets/img/creations/coasters/coaster1.jpg'
import coaster3 from '../assets/img/creations/coasters/coaster2.jpg'
import coaster4 from '../assets/img/creations/coasters/coaster3.jpg'
import coaster5 from '../assets/img/creations/coasters/coaster4.jpg'
import coaster8 from '../assets/img/creations/coasters/coaster8.jpg'

import white_flower1 from '../assets/img/creations/white_flower/white_flower1.jpg'
import white_flower2 from '../assets/img/creations/white_flower/white_flower2.jpg'
import white_flower3 from '../assets/img/creations/white_flower/white_flower3.jpg'
import white_flower4 from '../assets/img/creations/white_flower/white_flower4.jpg'

import donut from '../assets/img/creations/donut/donut.jpg'
import donut1 from '../assets/img/creations/donut/donut1.jpg'
import donut2 from '../assets/img/creations/donut/donut2.jpg'
import donut3 from '../assets/img/creations/donut/donut3.jpg'

const productsByTypeLocalized = () => ({
  pottery: {
    bowls: [
      {
        id: 1,
        name: i18n.t('products.blackBowlSet.name'),
        images: [black_bowl, black_bowl1],
        description: i18n.t('products.blackBowlSet.description'),
        price: i18n.t('products.blackBowlSet.price'),
        link: 'https://www.ebay.fr/itm/176200208891?mkcid=16&mkevt=1&mkrid=709-127639-2357-0&ssspo=zDEAZQ7KTSS&sssrc=2047675&ssuid=&widget_ver=artemis&media=COPY',
      },
    ],
    pots: [
      {
        id: 2,
        name: i18n.t('products.donutPot.name'),
        images: [donut, donut2, donut1, donut3],
        description: i18n.t('products.blackBowlSet.description'),
        price: i18n.t('products.blackBowlSet.price'),
        link: 'https://www.ebay.fr/itm/176200208891?mkcid=16&mkevt=1&mkrid=709-127639-2357-0&ssspo=zDEAZQ7KTSS&sssrc=2047675&ssuid=&widget_ver=artemis&media=COPY',
      },
    ],
  },
  crochet: {
    hat: [
      {
        id: 3,
        name: i18n.t('products.tomatoHat.name'),
        images: [tomato, tomato1, tomato2],
        description: i18n.t('products.tomatoHat.description'),
        price: i18n.t('products.tomatoHat.price'),
        link: 'https://www.ebay.fr/itm/176200208891?mkcid=16&mkevt=1&mkrid=709-127639-2357-0&ssspo=zDEAZQ7KTSS&sssrc=2047675&ssuid=&widget_ver=artemis&media=COPY',
      },
    ],
    plant: [
      {
        id: 4,
        name: i18n.t('products.plant.name'),
        images: [plant, plant2, plant3],
        description: i18n.t('products.plant.description'),
        price: i18n.t('products.plant.price'),
        link: 'https://www.ebay.fr/itm/176200208891?mkcid=16&mkevt=1&mkrid=709-127639-2357-0&ssspo=zDEAZQ7KTSS&sssrc=2047675&ssuid=&widget_ver=artemis&media=COPY',
      },
    ],
    coasters: [
      {
        id: 5,
        name: i18n.t('products.coasters.name'),
        images: [coaster1, coaster3, coaster4, coaster5, coaster8],
        description: i18n.t('products.coasters.description'),
        price: i18n.t('products.coasters.price'),
        link: 'https://www.ebay.fr/itm/176200208891?mkcid=16&mkevt=1&mkrid=709-127639-2357-0&ssspo=zDEAZQ7KTSS&sssrc=2047675&ssuid=&widget_ver=artemis&media=COPY',
      },
    ],
    flower: [
      {
        id: 6,
        name: i18n.t('products.whiteFlower.name'),
        images: [white_flower1, white_flower2, white_flower3, white_flower4],
        description: i18n.t('products.whiteFlower.description'),
        price: i18n.t('products.whiteFlower.price'),
        link: 'https://www.ebay.fr/itm/176200208891?mkcid=16&mkevt=1&mkrid=709-127639-2357-0&ssspo=zDEAZQ7KTSS&sssrc=2047675&ssuid=&widget_ver=artemis&media=COPY',
      },
    ],
  },
})

export default productsByTypeLocalized
