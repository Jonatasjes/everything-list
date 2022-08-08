import React from "react"
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Everything Lists</title>
        <meta name="description" content="Everyone needs to have control about your life, so start with a list!" />
      </Head>
      <main>
        <h1>
          Everything list
        </h1>
      </main>
    </>
  )
}

export default Home
