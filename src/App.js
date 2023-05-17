import React  from 'react';
import './App.css';
import Header from './Header';
import Card from './Card';
import imagenes from './img/imagenes';
import Footer from './Footer';

function App() {
  return (
    <>
    <div>
      <Header titulo="Galeria de Imagenes con React"></Header>
    </div>
    <div className='Card-Container'>
        <Card
          url={imagenes[0].img}
          title={imagenes[0].title}
          description={imagenes[0].description}/>
        <Card
          url={imagenes[1].img}
          title={imagenes[1].title}
          description={imagenes[1].description}/>
        <Card
          url={imagenes[2].img}
          title={imagenes[2].title}
          description={imagenes[2].description}/>
      </div>
      <Footer> </Footer></>
  );
}

export default App;
