import { Box } from '@mui/material'
import React from 'react'
import ItemComponent from '../components/Item'

function ListItems({ cabinets }) {
  return (
    <Box>
      {cabinets.map(cabinet => (
        <ItemComponent
          key={cabinet.id}
          nom={cabinet.nom}
          description={cabinet.description}
          disponibilite={cabinet.disponibilite}
          adresse={cabinet.adresse}
          id={cabinet.id}
        />
      ))}
    </Box>
  )
}

export default ListItems;
