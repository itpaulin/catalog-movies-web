import { createContext } from 'react'
import { Movie } from '../types/movie'
import { FetchNextPageOptions } from 'react-query'

export interface IMovieContextValues {
  data?: Movie[]
  isFetching: boolean
  reindexMovies: () => Promise<void>
  hasNextPage?: boolean
  fetchNextPage: (options?: FetchNextPageOptions) => Promise<unknown>
}

export const MovieContext = createContext<IMovieContextValues>({
  data: undefined,
  isFetching: false,
  reindexMovies: async () => {},
  hasNextPage: false,
  fetchNextPage: async () => {},
})
