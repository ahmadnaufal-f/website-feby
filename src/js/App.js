import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/App.css';
// import './style/custom.scss';
// import { Button } from 'react-bootstrap';
import MyNavbar from './navbar';
import React from 'react';
import bg from '../res/background.svg'
import Hero from './hero';
import AboutCard from './Card-about';

class App extends React.Component {
  render() {
    return (
      <div className='web-root'>
        <div id='wx-background' className="wx-background">
          <img
            src={bg}
            alt="background"
          />
        </div>
        <MyNavbar />
        <Hero />
        <AboutCard />
        <div style={{ height: '1000px' }}></div>
      </div>
    );
  }
}

export default App;
