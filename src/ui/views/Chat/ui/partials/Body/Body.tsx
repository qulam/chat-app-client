import React from 'react'
import { useQuery } from '@apollo/client'
import { Box } from '@mui/material'

import { GET_LOCATIONS } from 'src/ui/views/Chat/common/apollo/queries'

import { ChatOverlay } from '../../components'

import classes from './Body.module.scss'

const Body: React.FC = () => {
  const { loading, data, error } = useQuery(GET_LOCATIONS)

  console.log({
    loading,
    data,
    error,
  })

  return (
    <Box className={classes.wrapper}>
      <ChatOverlay />
    </Box>
  )
}

export default Body
