import { Box } from '@mui/material'
import React from 'react'
import ItemComponent from '../components/Item'


function ListItems() {
  return (
    <Box>
        <ItemComponent
          nom="Cabinet Vétérinaire"
          description="Prenez rendez-vous avec les meilleurs vétérinaires de votre région."
          disponibilite={true}
          adresse="123 Rue de la Santé"
          id="1"
        />
      <ItemComponent
        nom="Autre élément"
        description="Voici une autre description."
        disponibilite={false}
        adresse="456 Avenue Exemple, Ville"
        id='2'
      />
    </Box>
  )
}

export default ListItems