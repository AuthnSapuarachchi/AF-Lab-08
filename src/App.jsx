import './App.css'
import Greeting from './components/Greeting'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Banner from './components/Banner'
import Card from './components/Card'
import Testimonial from './components/Testimonial'
import Button from './components/Button'

function App() {

  return (
    <>
      <NavBar />
      <Banner />
      
      <div style={{ padding: '20px' }}>
        <Greeting />
        
        <h3>Check out our product:</h3>
        <Card />

        <h3>Testimonials:</h3>
        <Testimonial />

        <h3>Try our customizable buttons:</h3>
        <Button label="Click Me!" color="green" size="large" />
        <br /><br />
        <Button label="Small Button" color="purple" size="small" />
      </div>

      <Footer />
    </>
  )
}

export default App
