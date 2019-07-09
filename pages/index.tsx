import React from 'react'
import Link from 'next/link'
import { NextPage } from 'next'

interface HomePageProps {
  readonly className?: string
}

const HomePage: NextPage<HomePageProps> = ({ className }) => (
  <div>
    <h1>Lorem ipsumqweqwe</h1>
    <Link href="/index">
      <a>Home</a>
    </Link>
    <br />
    <Link href="/index?x=1">
      <a>Home 2</a>
    </Link>
  </div>
)

HomePage.getInitialProps = () => Promise.resolve({})

export default HomePage
