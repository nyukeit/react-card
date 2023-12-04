import './Card.scss'

export default function Card() {
  return (
    <div className="card">
      <div className='image'>
        <img src='https://dummyimage.com/600x300/000000/fff.png' />
      </div>
      <div className='content'>
        <h2 className='title'>Card</h2>
        <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <button className='button'>Button</button>
    </div>
  )
}