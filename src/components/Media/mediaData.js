import braunstein from './Braunstein.jpg';
import phil from './ethan_phil.jpg';
import mozart from './frost_mozart_solo.jpg';
import douglas from './Douglas_IDRS.jpg';
import scwharz_rite from './schwarz_rite.jpg';

const images = [
  {src: braunstein, alt: 'Braunstein', description: 'Ethan playing contrabassoon in a masterclass with Steve Braunstein of the San Francisco Symphony'},
  {src: phil, alt: 'Phil', description: 'Ethan performing with his brother Philip on his Philips masters recital'},
  {src: mozart, alt: 'Mozart', description: 'Ethan playing the Mozart Bassoon Concerto by memory for Frosts performance forum'},
  {src: douglas, alt: 'Douglas', description: 'Ethan with Dr. Tony Federico, Dr. Kristina Nelson, Bill Douglas, and Dr. Gyungsum Im after performing "Feast" by Bill Douglas at the 2022 International Double Reed Society Conference in Boulder, CO'},
  {src: scwharz_rite, alt: 'Schwarz', description: 'Ethan with Maestro Gerard Schwarz, after performing Rite of Spring as principal bassoon'},
]

const videos = [
  {
    title: 'Rite of Spring Solos',
    embedId: '7_iMsFq9Oxk',
    description: 'Performed with the Frost Symphony Orchestra at the University of Miami, led by Gerard Schwarz',
    date: '2022'
  },
  {
    title: 'Poulenc Trio',
    embedId: 'VJyt66S_blg',
    description: 'Performed with Curtis Sellers (oboe) and Sarah Thune (piano) at CU-Boulder',
    date: '2020'
  },
  {
    title: 'Hummel Concerto',
    embedId: 'b9rYzbNitpo',
    description: 'Recorded with Ellen Shuler (piano)',
    date: '2020'
  },
  {
    title: 'Pure Imagination',
    embedId: '4gi7Dj0sFCI',
    description: 'My own arrangement of Bricusse and Newley\'s song "Pure Imagination." All parts recorded by me in my apartment. ',
    date: '2020'
  },
  {
    title: 'Feast (Bill Douglas), IDRS 2022',
    embedId: 'LgWriZ5or90',
    description: 'Feast by Bill Douglas, performed at IDRS 2022 in Boulder, CO on Bill\'s tribute concert.',
    date: '2022'
  }
]

export { images, videos }