import React from 'react'
import { Box, Typography } from '@mui/material'

export default function ShortUrl({
  shortUrl
}: {
  shortUrl: string 
}) {
  return (
    <Box
      sx={{
        width: '100%'
      }}
    >
      <Typography sx={{color: 'rgba(0, 0, 0, 0.6)'}}>Your shortened URL: </Typography>
      {shortUrl &&
        <a href={shortUrl} target='_blank' rel='noopener noreferrer'>{shortUrl}</a>
      }
    </Box>
  )
}
