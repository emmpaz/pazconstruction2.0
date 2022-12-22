
import { Component } from 'react';
import './css/App.css';
import blueHeader from './pics/blue-overlay.png';
import Header from './Header';
import MainTitle from './MainTitle';
import Verse from './Verse';

class App extends Component{
  render(){
    return(
    <div className="App">
      <div className="blueHeader">
        <img className="img-header" src={blueHeader}/>
        <Header/>
        <MainTitle/>
        <Verse/>
      </div>
    </div>
  )
}
}

export default App;
