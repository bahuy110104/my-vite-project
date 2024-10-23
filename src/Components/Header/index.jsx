import './style.css';

const Header = () => {
  return (
    <div className='container'>
      <h1 className='explore'> Explore </h1>
      <p className='suggestion'>What are you gonna watch today?</p>
      <img src="/images/Banner.png" alt="" className='img-banner' />
      <div className="header-content">
        <h1>Spy X Family</h1>
        <p>
          Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis.
        </p>
      </div>
    </div>
  );
};

export default Header;
