import React from 'react'
import ReactDOM from 'react-dom'
import './Button.sass'

class Button extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <button>HELLO ITS ME</button>
    );
  }
}

export default Button;
