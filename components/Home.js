import React, { useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faListCheck, faEuroSign, faBicycle} from '@fortawesome/free-solid-svg-icons'

function Home() {

  const haloBannerStyle = `
  .haloBanner {
      background: linear-gradient(to right, #FFCD1C, #FFAC1E, #FFC221);
  }
`;


  useEffect(() => {
    const ligneBannieres = document.querySelector(`.${styles.ligneBannieres}`);
    const banniereLogos = document.querySelectorAll(`.${styles.banniereLogo}`);
  
    // Clonez chaque logo et ajoutez-le à la fin de la ligne
    banniereLogos.forEach(logo => {
      const clone = logo.cloneNode(true);
      ligneBannieres.appendChild(clone);
    });
  }, [])

 
  return (
    <div>
      <main className={styles.main}>
      <div className={styles.haloBanner}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFC221" fill-opacity="1" d="M0,320L40,288C80,256,160,192,240,165.3C320,139,400,149,480,165.3C560,181,640,203,720,218.7C800,235,880,245,960,218.7C1040,192,1120,128,1200,96C1280,64,1360,64,1400,64L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
        {/* <img className={styles.imgBanniere} src='HaloBanner.jpg' alt="Bannière"  /> */}
        </div>
        <div className={styles.firstPart}>
        <img className={styles.logo} src='IDELIVERY_LOGO-08.png' alt="logo"  />

      <div className={styles.title}>
            Vos plats préférés
            <br></br>en un clic, chez vous !
      </div>

      <div className={styles.consignes}>
      {/* <div className={styles.fondConsignes}>
        <img className={styles.imgBanniere} src='BoxBanner-01.jpg' alt="FondJaune"  />
        </div> */}
          <div className={styles.choisir}>
            <div className={styles.check}>
            <FontAwesomeIcon icon={faListCheck} />   
            </div>           
          <p className={styles.tuChoisis}>  
           Choisissez</p>
          </div>
          <div className={styles.payer}>
            <div className={styles.check}>
            <FontAwesomeIcon icon={faEuroSign} />
            </div>
            <p className={styles.tuPayes}>
            Payez</p>
          </div>
          <div className={styles.livrer}>
            <div className={styles.check}>
            <FontAwesomeIcon icon={faBicycle} />
            </div>
            <p className={styles.tuEsLivré}>
            Soyez livré !</p>
          </div>
        </div>
        </div>


        <div className={styles.banniere}>
        <div className={styles.ligneBannieres}>
          <img className={styles.banniereLogo} src='BANNER-03.jpg' alt="logo Renato"  />
          <img className={styles.banniereLogo} src='BANNER-01.jpg' alt="logo YoriYori"  />
          <img className={styles.banniereLogo} src='BANNER-02.jpg' alt="logo Costanza"  />
          <img className={styles.banniereLogo} src='BANNER-06.jpg' alt="logo Tiger Express"  />
          <img className={styles.banniereLogo} src='Tonysspaghettifinal.jpg' alt="logo Tony's Spaghetti"  />
          <img className={styles.banniereLogo} src='thamvietviet.jpg' alt="logo Tham Viet"  />

        </div>
        </div>
        <div className={styles.restoCard}>
        <div className={styles.acheté1offert}>
                <div className={styles.texteAcheté1offert}>
                1 acheté = 1 offert
                </div>
              </div>
          <div className={styles.imgResto}>
            <img className={styles.resto} src='BANNER-02.jpg' alt="logo Costanza"  />
          </div>
          <div className={styles.texteContainer}>
            <div className={styles.leftPart}>
              <div className={styles.ligne1gauche}>
                <h1 className={styles.h1}>COSTANZA</h1>
                <h2 className={styles.h2}> Italien</h2>
                </div>
                <div className={styles.ligne2gauche}>
                  <div className={styles.star}>
                <FontAwesomeIcon icon={faStar} />
                </div>
                <h3 className={styles.h3}>
                  4.6 (+500 avis)                   
   
                  </h3>
                </div>
              </div>

              <div className={styles.centerPart}>
                <div className={styles.btnCommander}
                onClick={() => window.location.href = 'https://www.order.store/store/costanza-pasta-mania-marseille-centre/Ci-hMpD_QESu1eOABy_mqQ'}
                >
                    <div className={styles.textCommander}>Commandez avec 
                    </div>
                    <img className={styles.uber3} src='uberEatsLong.jpg' alt="UberEats"  />
                </div>
              </div>

              <div className={styles.rigthPart}>
                <div className={styles.ligne1droite}>
                  <h2 className={styles.h2Livraison}>
                  <FontAwesomeIcon icon={faBicycle} className={styles.bicycle}/>
                  Livraison : 20 - 35 min
                  </h2>
                </div>
                <div className={styles.divInstagram}>
                <h2 className={styles.h2bis}>
                    Suivez-nous par ici   :
                  </h2><img className={styles.instagram} src='instagram.png' alt="Instagram"   
                  onClick={() => window.location.href = 'https://www.instagram.com/costanza_pastamania/'}
                  />
                </div>
              </div>
            </div>

          </div>
        
          <div className={styles.restoCard}>
        <div className={styles.acheté1offert}>
                <div className={styles.texteAcheté1offert}>
                1 acheté = 1 offert
                </div>
              </div>
          <div className={styles.imgResto}>
            <img className={styles.resto} src='BANNER-06.jpg' alt="logo Tiger Express"  />
          </div>
          <div className={styles.texteContainer}>
            <div className={styles.leftPart}>
              <div className={styles.ligne1gauche}>
                <h1 className={styles.h1}>TIGER EXPRESS</h1>
                <h2 className={styles.h2}> Asiatique</h2>
                </div>
                <div className={styles.ligne2gauche}>
                  <div className={styles.star}>
                <FontAwesomeIcon icon={faStar} />
                </div>
                <h3 className={styles.h3}>
                4.6 (+500 avis)                   
                  </h3>
                </div>
              </div>

              <div className={styles.centerPart}>
              <div className={styles.btnCommander}
                onClick={() => window.location.href = 'https://www.order.store/store/tiger-express-%E8%99%8E/jatJkJXsWBKKeLWmJRtmDA '}
                >                  
                    <div className={styles.textCommander}>Commandez avec 
                    </div>
                  <img className={styles.uber3} src='uberEatsLong.jpg' alt="UberEats"  />
                </div>
              </div>

              <div className={styles.rigthPart}>
                <div className={styles.ligne1droite}>
                  <h2 className={styles.h2Livraison}>
                  <FontAwesomeIcon icon={faBicycle} className={styles.bicycle}/>
                  Livraison : 20- 35 min
                  </h2>
                </div>
                <div className={styles.divInstagram}>
                <h2 className={styles.h2bis}>
                    Suivez-nous par ici   :
                  </h2><img className={styles.instagram} src='instagram.png' alt="Instagram"   
                  onClick={() => window.location.href = 'https://www.instagram.com/tigerexpress_marseille/?hl=fr'}
                  />
                </div>
              </div>
            </div>
            
          </div>

          <div className={styles.restoCard}>
        <div className={styles.acheté1offert}>
                <div className={styles.texteAcheté1offert}>
                1 acheté = 1 offert
                </div>
              </div>
          <div className={styles.imgResto}>
            <img className={styles.resto} src='Tonysspaghettifinal.jpg' alt="logo Tony's Spaghetti"  />
          </div>
          <div className={styles.texteContainer}>
            <div className={styles.leftPart}>
              <div className={styles.ligne1gauche}>
                <h1 className={styles.h1}>TONY'S SPAGHETTI</h1>
                <h2 className={styles.h2}> Italien</h2>
                </div>
                <div className={styles.ligne2gauche}>
                  <div className={styles.star}>
                <FontAwesomeIcon icon={faStar} />
                </div>
                <h3 className={styles.h3}>
                4.4 (+500 avis)                   
                  </h3>
                </div>
              </div>

              <div className={styles.centerPart}>
              <div className={styles.btnCommander}
                onClick={() => window.location.href = 'https://www.order.store/store/tonys-spaghetti-marseille-centre/FD4oWiUZWEqRkzSQ5g5Cqw '}
                >    
                 <div className={styles.textCommander}>Commandez avec 
                  </div>
                  <img className={styles.uber3} src='uberEatsLong.jpg' alt="UberEats"  />
                </div>
              </div>

              <div className={styles.rigthPart}>
                <div className={styles.ligne1droite}>
                  <h2 className={styles.h2Livraison}>
                  <FontAwesomeIcon icon={faBicycle} className={styles.bicycle}/>
                  Livraison : 20- 35 min
                  </h2>
                </div>
                <div className={styles.divInstagram}>
                <h2 className={styles.h2bis}>
                    Suivez-nous par ici   :
                  </h2><img className={styles.instagram} src='instagram.png' alt="Instagram"   
                  onClick={() => window.location.href = 'https://www.instagram.com/tonys_spaghetti/'}
                  />
                </div>
              </div>
            </div>
            
          </div>
          
          <div className={styles.restoCard}>
        <div className={styles.acheté1offert}>
                <div className={styles.texteAcheté1offert}>
                1 acheté = 1 offert
                </div>
              </div>
          <div className={styles.imgResto}>
            <img className={styles.resto} src='BANNER-01.jpg' alt="logo YORI YORI"  />
          </div>
          <div className={styles.texteContainer}>
            <div className={styles.leftPart}>
              <div className={styles.ligne1gauche}>
                <h1 className={styles.h1}>YORI YORI</h1>
                <h2 className={styles.h2}> Asiatique</h2>
                </div>
                <div className={styles.ligne2gauche}>
                  <div className={styles.star}>
                <FontAwesomeIcon icon={faStar} />
                </div>
                <h3 className={styles.h3}>
                4.6 (+500 avis)                   
                  </h3>
                </div>
              </div>

              <div className={styles.centerPart}>
              <div className={styles.btnCommander}
                onClick={() => window.location.href = 'https://www.order.store/store/yori-yori-%E6%96%99%E7%90%86/O3qNEnJ8VLO6jwPsESA6ig '}
                >                  
                    <div className={styles.textCommander}>Commandez avec 
                    </div>
                  <img className={styles.uber3} src='uberEatsLong.jpg' alt="UberEats"  />
                </div>
              </div>

              <div className={styles.rigthPart}>
                <div className={styles.ligne1droite}>
                  <h2 className={styles.h2Livraison}>
                  <FontAwesomeIcon icon={faBicycle} className={styles.bicycle}/>
                  Livraison : 20- 35 min
                  </h2>
                </div>
                <div className={styles.divInstagram}>
                <h2 className={styles.h2bis}>
                    Suivez-nous par ici   :
                  </h2><img className={styles.instagram} src='instagram.png' alt="Instagram"   
                  onClick={() => window.location.href = 'https://www.instagram.com/yoriyori_marseille/'}
                  />
                </div>
              </div>
            </div>
            
          </div>

          <div className={styles.restoCard}>
        <div className={styles.acheté1offert}>
                <div className={styles.texteAcheté1offert}>
                1 acheté = 1 offert
                </div>
              </div>
          <div className={styles.imgResto}>
            <img className={styles.resto} src='BANNER-03.jpg' alt="logo Renato Trattoria"  />
          </div>
          <div className={styles.texteContainer}>
            <div className={styles.leftPart}>
              <div className={styles.ligne1gauche}>
                <h1 className={styles.h1}>RENATO</h1>
                <h2 className={styles.h2}> Italien</h2>
                </div>
                <div className={styles.ligne2gauche}>
                  <div className={styles.star}>
                <FontAwesomeIcon icon={faStar} />
                </div>
                <h3 className={styles.h3}>
                4.5 (+500 avis)                   
                  </h3>
                </div>
              </div>

              <div className={styles.centerPart}>
              <div className={styles.btnCommander}
                onClick={() => window.location.href = 'https://www.order.store/store/renato-marseille-centre/dIHP9ws0X_mnnFzFH7ITAw '}
                >                  
                    <div className={styles.textCommander}>Commandez avec 
                    </div>
                  <img className={styles.uber3} src='uberEatsLong.jpg' alt="UberEats"  />
                </div>
              </div>

              <div className={styles.rigthPart}>
                <div className={styles.ligne1droite}>
                  <h2 className={styles.h2Livraison}>
                  <FontAwesomeIcon icon={faBicycle} className={styles.bicycle}/>
                  Livraison : 20- 35 min
                  </h2>
                </div>
                <div className={styles.divInstagram}>
                <h2 className={styles.h2bis}>
                    Suivez-nous par ici   :
                  </h2><img className={styles.instagram} src='instagram.png' alt="Instagram"   
                  onClick={() => window.location.href = 'https://www.instagram.com/renato.trattoria/'}
                  />
                </div>
              </div>
            </div>
            
          </div>

          <div className={styles.restoCard}>
        <div className={styles.acheté1offert}>
                <div className={styles.texteAcheté1offert}>
                1 acheté = 1 offert
                </div>
              </div>
          <div className={styles.imgResto}>
            <img className={styles.resto} src='thamvietviet.jpg' alt="logo Tham Viet"  />
          </div>
          <div className={styles.texteContainer}>
            <div className={styles.leftPart}>
              <div className={styles.ligne1gauche}>
                <h1 className={styles.h1}>THAM VIÊT</h1>
                <h2 className={styles.h2}>Vietnamien</h2>
                </div>
                <div className={styles.ligne2gauche}>
                  <div className={styles.star}>
                <FontAwesomeIcon icon={faStar} />
                </div>
                <h3 className={styles.h3}>
                4.5 (+500 avis)                   
                  </h3>
                </div>
              </div>

              <div className={styles.centerPart}>
              <div className={styles.btnCommander}
                onClick={() => window.location.href = 'https://www.order.store/store/tham-viet-vietnamese-vibes/RsL55qVNQBi414F_l2PxDg'}
                >                  
                    <div className={styles.textCommander}>Commandez avec 
                    </div>
                   <img className={styles.uber3} src='uberEatsLong.jpg' alt="UberEats"  />
                </div>
              </div>

              <div className={styles.rigthPart}>
                <div className={styles.ligne1droite}>
                  <h2 className={styles.h2Livraison}>
                  <FontAwesomeIcon icon={faBicycle} className={styles.bicycle}/>
                  Livraison : 20- 35 min
                  </h2>
                </div>
                <div className={styles.divInstagram}>
                <h2 className={styles.h2bis}>
                    Suivez-nous par ici   :
                  </h2><img className={styles.instagram} src='instagram.png' alt="Instagram"   
                  onClick={() => window.location.href = 'https://www.instagram.com/thamviet.marseille/'}
                  />
                </div>
              </div>
            </div>
            
          </div>
 
      <div className={styles.footer}>
    {/* <div class="text-overlay">
        <h2>Votre texte ici</h2>
        <p>Description ou autre texte</p>
    </div> */}
    
          <div className={styles.contact}>
            <div className={styles.titreFooter}>
              Contact
            </div>
            <div className={styles.coordonnées}>
            services@idelivery.fr
            </div>
          </div>
            {/* <img className={styles.logoFooter} src='IDELIVERY_LOGO-08.png' alt="Logo Idelivery"  /> */}

          <div className={styles.mentionsLegales}>
            <div className={styles.titreMentionsLegales}>
              Mentions Légales
            </div>
            <div className={styles.realisation}>
              Site réalisé par Manon ERB 
            </div>
          </div>

         </div>
    </main>


    </div>
  );
}

export default Home;
