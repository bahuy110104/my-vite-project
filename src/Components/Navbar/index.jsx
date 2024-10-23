import './style.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar-logo'>
            <h1>Anonime</h1>
        </div>
        <ul className='navbar-links'>
            <li>Home</li>
            <li>List anime</li>
        </ul>
        <form action="" className='search-bar'>
            <input type="text" placeholder='Search anime or movie' />
        </form>
    </nav>
  )
}

export  default Navbar;
