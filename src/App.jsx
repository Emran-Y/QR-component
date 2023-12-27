import './App.css'
import image from './assets/images/design/image-qr-code.png'

function App() {
  

  return (
    
    <div className='container'>
      <img src={image} alt="" />
      <h2 className="huge">Impove your front-end skills by building projects</h2>
      <p className="small-text">
        Scan the QR code to visit Frontend Mentor and take your coding skills to the next leve
      </p>
    </div>
    
  )
}

export default App
