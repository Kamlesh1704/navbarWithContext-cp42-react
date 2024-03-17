import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'
const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const darkTheme = () => {
        return (
          <div className="dark">
            {' '}
            <Navbar />
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
              alt="about"
            />
            <h1>About</h1>
          </div>
        )
      }
      const lightTheme = () => {
        return (
          <div className="light">
            <Navbar />
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
              alt="about"
            />
            <h1>About</h1>
          </div>
        )
      }
      return isDarkTheme ? darkTheme() : lightTheme()
    }}
  </ThemeContext.Consumer>
)
export default About
