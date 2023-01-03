
import React, { Component } from 'react';
import './css/App.css';
import blueHeader from './pics/blue-overlay.png';
import Header from './Header';
import MainTitle from './MainTitle';
import Verse from './Verse';
import Gallery from './Gallery';
import Location from './Location';
import AboutUs from './AboutUs';
import Contact from './Contact';

class App extends Component{

  constructor(props){
    super(props);

    this.GalleryRef = React.createRef();
    this.LocationRef = React.createRef();
    this.AboutUsRef = React.createRef();
    this.ContactRef = React.createRef();
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

  ContactScroll = () => {
    this.ContactRef.current.scrollIntoView({behavior : 'smooth'})
  }

  render(){
    return(
    <div className="App">
        <div className="wrapper">
          <img className="img-header" alt="header" src={blueHeader}/>
        </div>
        <Header galleryClick={this.GalleryScroll.bind(this)} locationClick={this.LocationScroll.bind(this)} aboutUsClick={this.AboutUsScroll.bind(this)} contactClick={this.ContactScroll.bind(this)}/>
        <MainTitle/>
        <Verse/>
        <div className="SpaceBetweenVerseAndGallery"/>
        <Gallery title={this.GalleryRef}/>
        <div className="SpaceBetweenGalleryAndLocation"/>
        <Location title={this.LocationRef}/>  
        <div className="SpaceBetweenGalleryAndLocation"/>
        <AboutUs title={this.AboutUsRef}/> 
        <div className="SpaceBetweenGalleryAndLocation"/>
        <Contact title={this.ContactRef}/>      
    </div>
  )
}
}

export default App;
