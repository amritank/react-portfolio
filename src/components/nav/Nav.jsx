import { Link, useLocation } from 'react-router-dom';
import './Nav.css'

const styles = {
    navlinks: {
        color: 'white',
        fontWeight: 'bolder',
        fontSize: '25px',
        textDecoration: 'none'
    }
};



function Nav() {
    return (

        <div className="col-12 d-flex" style={{ justifyContent: 'space-between', flexWrap: 'wrap', backgroundColor: '#14213d' }}>
            <h1 className="left font-white">AMRITA</h1>
            <ul className="right">
                <li className='nav-link'>
                    <Link to="/" style={styles.navlinks}
                        className={'nav-link-active'}>
                        About
                    </Link>
                </li>
                <li className='nav-link'>
                    <Link to="/portfolio" style={styles.navlinks}>
                        Portfolio
                    </Link>
                </li>
                <li className='nav-link'>
                    <Link to="/contact" style={styles.navlinks}>
                        Contact
                    </Link>
                </li>
                <li className='nav-link'>
                    <Link to="/resume" style={styles.navlinks}>
                        Resume
                    </Link>
                </li>
            </ul>
        </div>
    );

}

export default Nav;