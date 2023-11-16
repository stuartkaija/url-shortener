'use client';

import { useState } from 'react';
import { Box } from '@mui/material';
import styles from './page.module.css'

import ShortUrl from './components/ShortUrl';
import Form from './components/Form';

export default function Home() {
  const [shortUrl, setShortUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>URL Shortener</h1>
      <Box
        sx={{
          display: 'flex',
          flexDirection: {xs: 'column', md: 'row'},
        }}
      >
        <Form
          setShortUrl={setShortUrl}
          setErrorMessage={setErrorMessage}
        />
        <ShortUrl
          shortUrl={shortUrl}
        />
      </Box>
      {errorMessage && <p>{errorMessage}</p>}
    </main>
  )
}