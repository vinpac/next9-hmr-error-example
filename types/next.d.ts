import next from 'next'

declare module 'next' {
  export interface NextURLObject<Query = {}> {
    asPath: string
    pathname: string
    query: Query
  }
}
