import React from 'react'

export default function ShortUrl({ shortUrl }: { shortUrl: string }) {
  return (
    <div>
      <p>Your shortened URL: </p>
      {shortUrl &&
        <a href={shortUrl} target='_blank' rel='noopener noreferrer'>{shortUrl}</a>
      }
    </div>
  )
}
