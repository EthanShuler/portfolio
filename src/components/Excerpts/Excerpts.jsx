import React, { useState } from 'react'
import './Excerpts.css'

const Excerpts = () => {
  const excerpts = [
    {name: 'Bartok - Concerto for Orchestra (x2)', image: ['https://images.squarespace-cdn.com/content/v1/55fc5e83e4b0ab77d50ffc28/1444588431463-7SA7QWLEPAGD1OK3YT2U/Bartok+Bsn+1+Part+1.jpg?format=1500w', 'https://images.squarespace-cdn.com/content/v1/55fc5e83e4b0ab77d50ffc28/1471640052471-P3V4JO9ZN6UOL7ZW0UYI/Bartok+Bassoon+1+Part+2+NEW.jpg?format=1500w']},
    {name: 'Beethoven -Symphony 4 (x3)', image: ['https://images.squarespace-cdn.com/content/v1/55fc5e83e4b0ab77d50ffc28/1444603914218-0TY1TIJJ95T85ZP1PY2I/image-asset.jpeg?format=1500w', 'https://images.squarespace-cdn.com/content/v1/55fc5e83e4b0ab77d50ffc28/1444605614526-1FHXZHD98N28S9V5WD5V/image-asset.jpeg?format=1500w', 'https://images.squarespace-cdn.com/content/v1/55fc5e83e4b0ab77d50ffc28/1444614636487-PJ19N0BME1YA6MGHFB4P/image-asset.jpeg?format=1500w']},
    {name: 'Mozart - Marriage of Figaro (x2)', image: ['https://images.squarespace-cdn.com/content/v1/55fc5e83e4b0ab77d50ffc28/1446085104869-8OXT5A7V3Z7YEGOGRJB2/image-asset.jpeg?format=1500w', 'https://images.squarespace-cdn.com/content/v1/55fc5e83e4b0ab77d50ffc28/1446085376114-2FTE1GKNGKNDD7CAP91W/image-asset.jpeg?format=1500w']},
    {name: 'Ravel - Bolero', image: ['https://images.squarespace-cdn.com/content/v1/55fc5e83e4b0ab77d50ffc28/1446355767775-SNRHUZTWQ0DO9TQA2I0S/image-asset.jpeg?format=1500w']},
    {name: 'Ravel - Piano Concerto (x2)', image: ['https://images.squarespace-cdn.com/content/v1/55fc5e83e4b0ab77d50ffc28/1446322996339-2N64OIUY2W65P4SJQN03/image-asset.jpeg?format=1500w', 'https://images.squarespace-cdn.com/content/v1/55fc5e83e4b0ab77d50ffc28/1446335763330-M6N96U6RUC4OW7TJTVIA/image-asset.jpeg?format=1500w', 'https://images.squarespace-cdn.com/content/v1/55fc5e83e4b0ab77d50ffc28/1446335869951-OU18F72TIPPKR6WDZRFM/image-asset.jpeg?format=1500w']},
    {name: 'Rimsky-Korsakov - Schereazade (x2)', image: ['https://images.squarespace-cdn.com/content/v1/55fc5e83e4b0ab77d50ffc28/1446345370739-MS41LQV3UGKEOWQCREB3/image-asset.jpeg?format=1500w', 'https://images.squarespace-cdn.com/content/v1/55fc5e83e4b0ab77d50ffc28/1446346752031-S6P7MNIHW8SS66D4HC43/image-asset.jpeg?format=1500w']},
    {name: 'Shostakovich - Symphony 9', image: ['https://images.squarespace-cdn.com/content/v1/55fc5e83e4b0ab77d50ffc28/1446406239110-Y3ANJS28218L0H33UE80/image-asset.jpeg?format=1500w']},
    {name: 'Stravinsky - Pulcinella Gavotta', image: ['https://images.squarespace-cdn.com/content/v1/55fc5e83e4b0ab77d50ffc28/1444281032568-NU3I5D2M56CZPTG4HQAR/image-asset.jpeg?format=1500w']},
    {name: 'Stravinsky - Rite of Spring', image: ['https://images.squarespace-cdn.com/content/v1/55fc5e83e4b0ab77d50ffc28/1444272192860-L1O4PMKTB97QRVRI0OCQ/image-asset.jpeg?format=1500w']},
    {name: 'Tchaikovsky - Symphony 4', image: ['https://images.squarespace-cdn.com/content/v1/55fc5e83e4b0ab77d50ffc28/1444018314469-BY6MPTKF2LMNC7XGUQGK/image-asset.jpeg?format=1500w']},
    {name: 'Tchaikovsky - Symphony 5', image: ['https://images.squarespace-cdn.com/content/v1/55fc5e83e4b0ab77d50ffc28/1444169980102-JLJ16CVM35TELFLXY9QL/image-asset.jpeg?format=1500w']},
    {name: 'Tchaikovsky - Symphony 6', image: ['https://images.squarespace-cdn.com/content/v1/55fc5e83e4b0ab77d50ffc28/1444064269406-K61BFQT76S0ZVO5MXVPT/image-asset.jpeg?format=1500w']},
  ]

  const [currentExcerpt, setCurrentExcerpt] = useState('')
  return (
    <div className='excerpts'>
      <div className="header">
      <button className='spin'
        onClick={() => setCurrentExcerpt(excerpts[Math.floor(Math.random() * excerpts.length)])}>
        Spin the wheel
      </button>
      <h1>{currentExcerpt.name}</h1>
      </div>
      
      <div className='excerpt'>
        <div className='excerptPics'>
          {currentExcerpt.image?.map(
            imgsrc => <div><img src={imgsrc} alt="" key={imgsrc}/></div>
            )}
        </div>
      </div>
    </div>
  )
}

export default Excerpts