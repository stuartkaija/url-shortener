import { useState, Dispatch, SetStateAction } from 'react'

export default function Form({
  setShortUrl,
  setErrorMessage
}: {
  setShortUrl: Dispatch<SetStateAction<string>>
  setErrorMessage: Dispatch<SetStateAction<string>>
}) {
  const [longUrl, setLongUrl] = useState('');

  const formHandler = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    setErrorMessage('');
    setShortUrl('');

    try {
      const response = await fetch(`https://url-shortener-api-8nj0.onrender.com`, {
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
        setErrorMessage(`${data.statusCode}, ${data.error}: ${data.message}`)
      }

    } catch (error: unknown) {
      console.error(error);
    }
  }

  return (
    <form name="url-form" onSubmit={formHandler}>
      <label htmlFor="urlInput">Enter URL</label>
      <input
        type="text"
        id="urlInput"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  )
}
