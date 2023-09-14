import type { id, type } from '../properties'

export interface Base {
  '@context'?: string | string[]
  type?: type
  id?: id
  [key: string]: any
}
