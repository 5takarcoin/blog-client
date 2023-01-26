import "./header.css"

const Header = () => {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">TANVIR</span>
        </div>
        <img src="https://images.pexels.com/photos/2237798/pexels-photo-2237798.jpeg" alt="" className="headerImg" />
    </div>
  )
}

export default Header