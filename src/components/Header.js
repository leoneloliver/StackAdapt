import React, { Component } from 'react';
import logo from '../images/logo.png';
import styles from '../styles/main.css'

class Header extends Component {
  render() {
    return (
      <header className={styles['app-header']}>
         <img src={logo} className={styles['app-logo']} alt="logo" />
       </header>
    );
  }
}

export default Header;