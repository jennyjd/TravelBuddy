import React from 'react'
import styles from './Header.sass'

class Header extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <header className={styles.root}>
        HEADER
        {this.props.children}
      </header>
    );
  }
}

export default Header;
