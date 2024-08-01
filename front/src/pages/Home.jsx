import { Box, Button } from '@mui/material';
import React from 'react';
import HomeWelcome from './HomeComponent/HomeWelcome';
import CardComponent from '../components/Card';
import CabinetCardImg1 from '../assets/CabinetCardImg1.png'
import CabinetCardImg3 from '../assets/CabinetCardImg3.png'
import HomeAbout from './HomeComponent/HomeAbout';
import SmoothScrollComponent from '../components/Scroll';

function Home() {

  const cards = [
    {
      image: CabinetCardImg1,
      title: 'Cabinet Vétérinaire',
      description: 'Prenez rendez-vous avec les meilleurs vétérinaires de votre région.',
      buttonText: 'Plus d\'infos',
      buttonLink: '/cabinets',
    },
    {
      image: CabinetCardImg3,
      title: 'Besoin d\'aide ?',
      description: 'Vous pouvez nous contacter à tout moment en cas de question ou de problème avec le site.',
      buttonText: 'Nous Contacter',
      buttonLink: '/contact',
    },
  ];

  return (
    <Box sx={{ position: 'relative', width: '100%', height: 'auto', overflow: 'hidden' }}>
      <SmoothScrollComponent delay={-0.2}>
        <Box>
          <HomeWelcome />
        </Box>
      </SmoothScrollComponent>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 4, background: 'radial-gradient(white, #B1BAC7)' }}>
      {cards.map((card, index) => (
        <Box key={index} sx={{ display: 'flex', justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end', width: '95%' }}>
          <SmoothScrollComponent>
          <CardComponent
            image={card.image}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
            buttonLink={card.buttonLink}
            align={index % 2 === 0 ? 'left' : 'right'}
          /> 
          </SmoothScrollComponent>
        </Box>
      ))}
      <SmoothScrollComponent>
      <HomeAbout />
      </SmoothScrollComponent>
      </Box>
      
    </Box>
  );
}

export default Home;
