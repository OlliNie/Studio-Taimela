import React, { useState } from 'react';
import styles from './MobileNav.css';
import logo from '../../assets/images/logo.png';
import { FaBars } from 'react-icons/fa';
import createLinks from './createLinks';
import { allLinks } from '../../text/nav';


export default function MobileNavHook(){
  const [navState, setNavState] = useState(
    {
      display:false
    }
  );
  const updateClick = ()=>{
    setNavState({ display:!navState.display });
  };
  const mobileList = createLinks(allLinks, updateClick);
  return (
    <>
      <nav className={styles.nav}>
        <section className={styles.navBar}>
          <img alt='logo' src={logo}></img>
          <FaBars onClick={updateClick} size={32} />
        </section>
      </nav>
      <section className={[styles.navMenu, navState.display].join(' ')}>
        {navState.display === true ? <ul>{mobileList}</ul> : null}
      </section>
    </>
  );
}