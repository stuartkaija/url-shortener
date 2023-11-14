'use client';

import { useState } from 'react';
import styles from './page.module.css'

import ShortUrl from './components/ShortUrl';
import Form from './components/Form';

export default function Home() {
  const [shortUrl, setShortUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <div className={styles.main}>
      <h1>URL Shortener</h1>
      <div>
        <Form
          setShortUrl={setShortUrl}
          setErrorMessage={setErrorMessage}
        />
      </div>
      <div>
        <ShortUrl
          shortUrl={shortUrl}
        />
      </div>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  )
}