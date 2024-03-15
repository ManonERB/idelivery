// import styles from '../styles/Mentions.module.css'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'

    function MentionsLegalesFunction() {

   return (
    <div>
        <div className={styles.h1}>A propos d'idelivery</div> 
            <div className={styles.h2}>Nom commercial : Italian delivery
            <br></br>
            Forme juridique : Société par actions simplifiées
            <br></br>
            Montant du capital social : 1.000€
            <br></br>
            Adresse : 241 avenue du Prado, 13008 Marseille
            <br></br>
            Numéro SIREN : 902798164
            <br></br>
            Numéro de téléphone : +33 6 13 54 87 95
            <br></br>
            Adresse mail : services@idelivery.fr
            <br></br>
            Numéro d'inscription au registre du commerce et des sociétés (RCS) et au registre national unique des entreprises (RNE) : FR80902798164
            <br></br>
            Numéro individuel d'identification : Marseille B 902 798 164
            </div>

        <div className={styles.h1}>Informations sur l'éditeur du site :</div>
            <div className={styles.h2}>Dénomination sociale : 
            Nom de l'entreprise ou du particulier responsable du site : Manon ERB
            <br></br>
            Nom de l'hébergeur :
            <br></br>
            Adresse postale de l'entité : 12 allée Léon Gambetta, 13001 marseille            
            <br></br>
            Numéro de téléphone : 06.59.76.71.46
            <br></br>
            Adresse mail : manon.erb@gmail.com
            <br></br>
            Statut juridique : auto-entreprise 
            <br></br>
            {/* Numéro d'immatriculation au registre du commerce et des sociétés : */}
            Mise à jour des mentions légales : Février 2024
            <br></br>
            Date de la dernière mise à jour des mentions légales : Février 2024
            </div>

            <div className={styles.return}
            onClick={() => window.location.href = '/mentionsLegales'}>
            
                <FontAwesomeIcon icon={faArrowLeft} />
                <a href=""></a>

            </div>
    </div>

    )
}

export default MentionsLegalesFunction;