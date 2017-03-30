import React from 'react'
import Header from '../components/Header/Header.jsx'
import Button from '../components/commons/Button.jsx'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header>
          <Button modifiers={['orange']}> Hello its me </Button>
        </Header>
      </div>
    );
  }
}

export default App;
