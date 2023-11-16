import React from 'react'
import { Box, Typography, Link } from '@mui/material'

export default function ShortUrl({
  shortUrl,
  errorMessage
}: {
  shortUrl: string
  errorMessage: string
}) {
  return (
    <Box
      sx={{
        width: '100%'
      }}
    >
      <Typography
        sx={{
          color: 'rgba(0, 0, 0, 0.6)',
          margin: '1rem 0rem 1rem'
        }}
      >
        Your shortened URL:
      </Typography>
      {shortUrl &&
        <Link
          href={shortUrl}
          target='_blank'
          rel='noopener noreferrer'
        >
          {shortUrl}
        </Link>
      }
      {errorMessage &&
        <Typography>
          An error occurred! {errorMessage}
        </Typography>
      }
    </Box>
  )
}
