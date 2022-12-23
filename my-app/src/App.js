
import { Component } from 'react';
import './css/App.css';
import blueHeader from './pics/blue-overlay.png';
import Header from './Header';
import MainTitle from './MainTitle';
import Verse from './Verse';
import Gallery from './Gallery';

class App extends Component{
  render(){
    return(
    <div className="App">
        <div className="wrapper">
          <img className="img-header" src={blueHeader}/>
        </div>
        <Header/>
        <MainTitle/>
        <Verse/>
        <div className="SpaceBetweenVerseAndGallery"/>
        <Gallery/>
    </div>
  )
}
}

export default App;
