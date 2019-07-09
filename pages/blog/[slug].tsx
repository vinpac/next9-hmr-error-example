import React from 'react'
import { NextPage, NextURLObject } from 'next'

interface BlogPostProps {
  readonly className?: string
  readonly url: NextURLObject<{ slug: string }>
}

const BlogPost: NextPage<BlogPostProps> = props => (
  <div>
    <h1>Home</h1>
    <button
      style={{
        appearance: 'none',
        background: '#3b5998',
        color: '#fff',
        padding: '8px 12px',
        border: 'none',
        borderRadius: 4,
        fontWeight: 500,
        fontSize: 16,
      }}
    >
      Login with Twitter
    </button>
  </div>
)

export default BlogPost
