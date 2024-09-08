import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDev, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


const styles = {
    footerIcons: {
        fontSize: '50px',
        color: 'black'
    },
    aTag: {
        textDecoration: "None",

    }
};

function Footer() {
    return (
        <Footer id="footerContainer">
            <div id="footerItems">
                {/* <a href="https://github.com/amritank" target="_blank" style={styles.footerIcons}>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/amrita-nair-b04259314/" target="_blank" style={styles.footerIcons}>
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://dev.to/amrita_nair_d7c550f076501" target="_blank" style={styles.footerIcons}>
                    <FontAwesomeIcon icon={faDev} />
                </a> */}
            </div>
        </Footer >
    );
}

export default Footer;