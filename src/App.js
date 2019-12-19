import React from 'react';

import { HeaderApp } from './App/HeaderApp';
import { MainApp } from './App/MainApp';
import { FooterApp } from './App/FooterApp';

const links = [
  { link: 'https://www.ajedreztomelloso.com/', text: 'Blog' },
  { link: 'https://www.ajedreztomelloso.com/', text: 'Prensa' },
  { link: 'https://www.ajedreztomelloso.com/', text: 'Contacta' },
  { link: 'https://www.ajedreztomelloso.com/', text: 'Términos' }
];

const App = () => {
  return (
    <>
      <HeaderApp name='Guay' logo='https://emotion.sh/static/a76dfa0d18a0536af9e917cdb8f873b9/629d2/emotion.webp' />
      <MainApp />
      <FooterApp links={links} copyright='Este es el copyright' />
    </>
  );
};

export default App;
