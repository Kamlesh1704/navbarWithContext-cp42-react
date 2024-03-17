import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'
const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const darkTheme = () => {
        return (
          <div className="dark">
            <Navbar />
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
              alt="home"
            />
            <h1>Home</h1>
          </div>
        )
      }
      const lightTheme = () => {
        return (
          <div className="light">
            <Navbar />
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
              alt="home"
            />
            <h1>Home</h1>
          </div>
        )
      }
      return isDarkTheme ? darkTheme() : lightTheme()
    }}
  </ThemeContext.Consumer>
)
export default Home
