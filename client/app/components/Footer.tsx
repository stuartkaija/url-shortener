import React from 'react';
import Image from 'next/image';
import { Box, Typography, Link } from '@mui/material';
import LinkedInIcon from '@component/public/linkedin_black_logo_icon_147114.png';
import GitHubIcon from '@component/public/github-mark.png'

export default function Footer() {
  return (
    <Box
      sx={{
        marginTop: 'auto'
      }}
    >
      <Typography>Built by Stuart Kaija</Typography>
      <Link
        href='https://www.linkedin.com/in/stuartkaija'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={LinkedInIcon.src} alt="LinkedIn icon" width={32} height={32} />
      </Link>
      <Link
        href='https://www.github.com/stuartkaija'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={GitHubIcon.src} alt="GitHubIcon" width={32} height={32} />
      </Link>
    </Box>
  )
}
