import React from 'react'
import { Box } from '@mui/material'

import { ChatAside, ChatBody } from './ui/partials'

import classes from './Chat.module.scss'

const Chat: React.FC = () => {
  return (
    <Box className={classes.wrapper}>
      <ChatAside />
      <ChatBody />
    </Box>
  )
}

export default Chat
