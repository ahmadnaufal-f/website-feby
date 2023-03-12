import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/App.css';
import Header from './components/header/header';
import React from 'react';
import Hero from './containers/hero/hero';
import Intro from './containers/intro/intro';

class App extends React.Component {
  render() {
    return (
      <div className='web-root'>
        <Header />
        <Hero />
        <Intro />
        <div style={{ height: '1000px' }}></div>
      </div>
    );
  }
}

export default App;
