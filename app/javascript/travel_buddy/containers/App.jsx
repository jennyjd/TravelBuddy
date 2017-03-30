import React from 'react'
import Button from '../components/commons/Button.jsx'

class App extends React.Component {
  render() {
    return (
      <Button modifiers={['orange']}> Hello its me </Button>
    );
  }
}

export default App;
