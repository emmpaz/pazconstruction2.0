
import { Component } from 'react';
import './css/App.css';
import blueHeader from './pics/blue-overlay.png';
import Header from './Header';

class App extends Component{
  render(){
    return(
    <div className="App">
      <div className="blueHeader">
        <Header/>
        <img className="img-header" src={blueHeader}/>
      </div>
    </div>
  )
}
}

export default App;
