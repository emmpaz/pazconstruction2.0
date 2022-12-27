
import React, { Component } from 'react';
import './css/App.css';
import blueHeader from './pics/blue-overlay.png';
import Header from './Header';
import MainTitle from './MainTitle';
import Verse from './Verse';
import Gallery from './Gallery';
import Location from './Location';
import AboutUs from './AboutUs';

class App extends Component{

  constructor(props){
    super(props);

    this.GalleryRef = React.createRef();
    this.LocationRef = React.createRef();
    this.AboutUsRef = React.createRef();
  }

  GalleryScroll = () => {
    this.GalleryRef.current.scrollIntoView({behavior:'smooth'});
  };

  LocationScroll = () => {
    this.LocationRef.current.scrollIntoView({behavior:'smooth'});
  };

  AboutUsScroll = () => {
    this.AboutUsRef.current.scrollIntoView({behavior:'smooth'});
  };

  render(){
    return(
    <div className="App">
        <div className="wrapper">
          <img className="img-header" src={blueHeader}/>
        </div>
        <Header galleryClick={this.GalleryScroll.bind(this)} locationClick={this.LocationScroll.bind(this)} aboutUsClick={this.AboutUsScroll.bind(this)}/>
        <MainTitle/>
        <Verse/>
        <div className="SpaceBetweenVerseAndGallery"/>
        <Gallery title={this.GalleryRef}/>
        <div className="SpaceBetweenGalleryAndLocation"/>
        <Location title={this.LocationRef}/>  
        <div className="SpaceBetweenGalleryAndLocation"/>
        <AboutUs title={this.AboutUsRef}/>       
    </div>
  )
}
}

export default App;
