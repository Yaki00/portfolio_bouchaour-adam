import './navbar.css'
import { useEffect } from 'react';
function Sidebar() {


  const handleScroll = () => {

    const scrollY = window.scrollY;

    const logo = document.querySelector('.LogoNav');

    if (scrollY >= 100) {
      logo.clasName = "bi-house-door";

    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);



  return (
    <>
      <div className="col-md-2 sidebar-fixed">
        <div>
          <li className="nav-item logo-item">
            <img src="/portfolio_bouchaour-adam/img4.jpg" alt="Logo" className="logo-image" />
            <p className="logo-text">Adam BOUCHAOUR</p>
          </li>
        </div>
        <ul className="nav flex-column part2">
          <li className="nav-item">
            <a className="nav-link active" href="#page1" >
              <i className="bi bi-house-door"></i> Accueil
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#apropos">
              <i className="bi bi-person"></i> À propos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#parcours">
              <i className="bi bi-book"></i> Parcours
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#doc">
              <i className="bi bi-file-earmark-text"></i> Documents
            </a>
          </li>
        </ul>
      </div>
      <div className='LogoNav'>

      </div>
    </>

  );
}

export default Sidebar; 