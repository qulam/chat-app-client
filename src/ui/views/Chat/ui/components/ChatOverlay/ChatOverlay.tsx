import React from 'react'
import { Box, Typography } from '@mui/material'

import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined'

import classes from './ChatOverlay.module.scss'

const ChatOverlay: React.FC = () => {
  return (
    <Box className={classes.wrapper}>
      <AnnouncementOutlinedIcon color="info" fontSizeAdjust={100} />
      <Typography variant="h2" className={classes.wrapperText}>Welcome to React Chat App</Typography>
    </Box>
  )
}

export default ChatOverlay
