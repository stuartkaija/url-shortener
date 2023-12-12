import React from 'react'
import { Box, Typography, Link, LinearProgress } from '@mui/material'

export default function ShortUrl({
  shortUrl,
  errorMessage,
  isLoading
}: {
  shortUrl: string
  errorMessage: string
  isLoading: boolean
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
      {isLoading &&
        <LinearProgress/>
      }
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
        <Typography
          sx={{
            color: '#d32f2f'
          }}
        >
          {errorMessage}
        </Typography>
      }
    </Box>
  )
}
