import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'
const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const darkTheme = () => {
        return (
          <>
            <Navbar />
            <div className="darkk">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
                alt="not found"
              />
              <h1 className="dark">Lost Your Way?</h1>
              <p className="dark">We cannot seem to find the page</p>
            </div>
          </>
        )
      }
      const lightTheme = () => {
        return (
          <>
            <Navbar />
            <div className="lightt">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
                alt="not found"
              />
              <h1 className="light">Lost Your Way?</h1>
              <p className="light">we didnt find page you are loooking for</p>
            </div>
          </>
        )
      }
      return isDarkTheme ? darkTheme() : lightTheme()
    }}
  </ThemeContext.Consumer>
)
export default NotFound
