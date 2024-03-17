import ThemeContext from '../../context/ThemeContext'
import {Link} from 'react-router-dom'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {toggleTheme, isDarkTheme} = value
      const onclicktheme = () => {
        toggleTheme()
      }
      const lightTheme = () => {
        return (
          <nav className="light">
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
              alt="website logo"
            />
            <ul>
              <li className="lightt">
                <Link to="/" className="lightt">
                  Home
                </Link>
              </li>
              <li className="lightt">
                <Link to="/about" className="lightt">
                  About
                </Link>
              </li>
            </ul>
            <button data-testid="theme" onClick={onclicktheme}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                alt="theme"
              />
            </button>
          </nav>
        )
      }

      const darkTheme = () => {
        return (
          <nav className="dark">
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
              alt="website logo"
            />
            <ul>
              <li className="darkk">
                <Link to="/" className="darkk">
                  Home
                </Link>
              </li>
              <li className="darkk">
                <Link to="/about" className="darkk">
                  About
                </Link>
              </li>
            </ul>
            <button data-testid="theme" onClick={onclicktheme}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                alt="theme"
              />
            </button>
          </nav>
        )
      }
      return isDarkTheme ? darkTheme() : lightTheme()
    }}
  </ThemeContext.Consumer>
)
export default Navbar
