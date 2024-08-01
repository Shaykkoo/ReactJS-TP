import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ListItems from '../components/ListItems'
import HeaderComponent from '../components/Header'
import SmoothScrollComponent from '../components/Scroll'

function HomeCabinets() {
  const [cabinets, setCabinets] = useState([]);

  useEffect(() => {
    const fetchCabinets = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/cabinets');
        const data = response.data['hydra:member'];
        setCabinets(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des cabinets:', error);
      }
    };

    fetchCabinets();
  }, []);

  return (
    <Box sx={{
      background: 'radial-gradient(white, #B1BAC7)',
      height: '100vh'
    }}>
      <Box>
          <HeaderComponent 
            title="LISTE DES CABINETS"
            sx={{ padding: 4 }}
          />
      </Box>
        <SmoothScrollComponent delay={1}>
          <ListItems cabinets={cabinets} />
        </SmoothScrollComponent>
    </Box>
  )
}

export default HomeCabinets;
