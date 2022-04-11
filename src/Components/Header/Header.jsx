import './Header.scss';

const Header = () => {
  return (
    <div className='Header'>
        <div className="headerTitles">
            <span className="bigTitle">
              <h2>BLOG</h2>
              <h2>BLOG</h2>
            </span>
            <span className="smTitle">By Aviroop Banerjee</span>
        </div>
        <img className='headerImage' src="Assets\Images\nature-gbb91b4047_1920.jpg" alt="" />
    </div>
  )
}

export default Header