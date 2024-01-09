import { useState, Dispatch, SetStateAction } from 'react'
import { Box, InputLabel, TextField, Button } from '@mui/material'
import isURL from 'validator/lib/isURL';
import styles from './Form.module.css'

export default function Form({
  setShortUrl,
  setErrorMessage,
  setIsLoading
}: {
  setShortUrl: Dispatch<SetStateAction<string>>
  setErrorMessage: Dispatch<SetStateAction<string>>
  setIsLoading: Dispatch<SetStateAction<boolean>>
}) {
  const [longUrl, setLongUrl] = useState('');
  const [formError, setFormError] = useState(false);

  const formHandler = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (longUrl.length === 0) {
      setFormError(true);
      return;
    }

    if (!isURL(longUrl, { require_protocol: true })) {
      setFormError(true);
      return;
    }

    setFormError(false);
    setErrorMessage('');
    setShortUrl('');
    setIsLoading(true);

    try {
      const response = await fetch(`https://lil-url.net/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ longUrl })
      })

      const data = await response.json();

      if (response.ok) {
        setShortUrl(data.short_url);
      } else {
        setErrorMessage(`${data.statusCode}, ${data.message}`)
      }

    } catch (error: unknown) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form className={styles.form} name="url-form" onSubmit={formHandler}>
      <InputLabel
        sx={{
          margin: '1rem 0rem 0rem'
        }}
      >
        Enter a URL to shorten
      </InputLabel>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: { xs: '100%' },
        }}
      >
        <TextField
          sx={{
            margin: '1rem 0rem',
            width: { md: '20rem' }
          }}
          type="text"
          id="urlInput"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          error={formError}
          helperText={formError && 'Please enter a valid URL'}
        />
        <Button
          sx={{
            margin: '0rem 0rem 1rem',
            width: { md: '20rem' },
            height: '3rem'
          }}
          variant='contained'
          type='submit'
        >
          Submit
        </Button>
      </Box>
    </form>
  )
}
