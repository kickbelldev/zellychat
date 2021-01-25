/** @jsx jsx */
import { useState, useEffect } from 'react'
import { jsx, css } from '@emotion/react'

const blueColor = css`
  color: blue;
`

const Home = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000)
    return () => clearTimeout(timer)
  }, [count, setCount])

  return (
    <div>
      <header>
        <h1>
          This page was opened before <code css={blueColor}>{count}</code> seconds.
        </h1>
      </header>
    </div>
  )
}

export default Home