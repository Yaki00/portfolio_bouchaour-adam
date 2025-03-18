import { useState, useEffect } from 'react';
import "./Ecole.css";

function Ecole() {

    const images = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQMIPvs5en9lYn39p9H_dQr8WhJd3iNGT50LaoqLWyBg&shttps://t2e2i7f7.rocketcdn.me/wp-content/uploads/2022/07/master-cybersecurite-paris-6.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUDW87_ciG7ChQoiZdccYfwMP_Cucp0vVlkuejEPvA8Q&s",
        "https://mesinfos.fr/content/articles/475/A114475/initial-coblence-avocats.jpg",
        "https://walt.community/uploads/media/6221df85c9729_.png",
        "https://yt3.googleusercontent.com/XLarrMIpapIactJEWciEnrqsN9DT4CSyPHVhxTX2wv23Eh0a7eKh2zeYyFDFiPqh3sdr0Q4S=s900-c-k-c0x00ffffff-no-rj",
        "https://media.licdn.com/dms/image/v2/C560BAQFJXuUHCojePA/company-logo_200_200/company-logo_200_200/0/1654185619404/arkeon_energy_systems_logo?e=2147483647&v=beta&t=uJM1hz-2Ndh24utTrH_m41G4rGWYOW63slq8ZhdSzH0",
        "https://pbs.twimg.com/profile_images/1060554457711284225/K94GJsVd_400x400.jpg",
    ];

    const [expanded, setExpanded] = useState(null);

    const handleClickOutside = (event) => {
        if (expanded && !event.target.closest('.cardecole')) {
            setExpanded(null);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [expanded]);
    return (
        <div id="parcours" className="container my-5 ecolediv">
            <h1 className="titreVeille">Parcours</h1> 
            <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                <div className="container my-5">
                    
      <div className="row">
        <div className="col-12">
          <ul className="timeline">
            <li>
              <div className="timeline-badge"><i className="glyphicon glyphicon-check"></i></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>MASTER OF SCIENCE</h4>
                  <h5>EPITECH 2025 - 2027</h5>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-badge"><i className="glyphicon glyphicon-check"></i></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Alternance Developpeur Full Stack</h4>
                  <h5>Arkeon 2024-2025</h5>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-badge"><i className="glyphicon glyphicon-check"></i></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Bachelor Developpeur Full Stack</h4>
                  <h5>ITIC 2024 - 2025</h5>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-badge"><i className="glyphicon glyphicon-check"></i></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>BTS SIO SLAM</h4>
                  <h5>ESIC 2022 - 2024</h5>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-badge"><i className="glyphicon glyphicon-check"></i></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                    <h4>Stage Informatique Developpement Web</h4>
                    <h5>Wecyde 6 mois 2023-2024</h5>
                </div>
              </div>
            </li>

            <li className="timeline-inverted">
              <div className="timeline-badge"><i className="glyphicon glyphicon-check"></i></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                    <h4>Licence Math Informatique</h4>
                    <h5>Université Paris Saclay 2019-2022</h5>
                </div>
              </div>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  
                    <div className='cardphoto  '>
                        <div className="photo-stack mb-3">
                            {images.map((src, index) => (
                                <img key={index} src={src} alt={`Image ${index}`} className={`stacked-photo photo-${index}`} />
                            ))}
                        </div>

                    </div>

                </div>

                
            </div>
        </div>
    );
}

export default Ecole;
