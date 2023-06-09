import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
const App  = () => {
  const images = [987,549,452,501,666,881,549,666,442,327].map((size) =>
  ({ src: `https://picsum.photos/seed/picsum/${size}/${size}` }));
  return(
    <Carousel images={images} style={{ height: '950px', width:'100%',marginLeft:'-21px'}} />
  );
};

export default App;