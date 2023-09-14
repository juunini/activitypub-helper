import type { id, type } from '../properties'

export interface Base {
  '@context'?: any
  type?: type
  id?: id
  [key: string]: any
}
