import './style.css';

const Header = () => {
  return (
    <div>
      <div className="container-fluid">
        {/* Background animation */}
        <div className="background">
          <div className="header-container">
            <div className="header-content">
              <h1 className="main-title">
                OMAR DEROUICH
              </h1>
              <div className="subtitle-container">
                <div>INTEGRATOR WEB, &</div>
                <div>WEB DESIGNER</div>
              </div>
            </div>
          </div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
