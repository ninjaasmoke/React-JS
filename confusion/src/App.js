import React from 'react';
import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  // constructor(props) {
  //   super();
  //   this.state = {
  //     dishes: DISHES
  //   };
  // } // handled in mainComponent
  render() {
    return (
      <BrowserRouter>
        <div>
          <Main />
        </div >
      </BrowserRouter>
    );
  }
}

export default App;
